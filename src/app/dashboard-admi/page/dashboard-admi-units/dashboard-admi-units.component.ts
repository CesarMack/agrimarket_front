import { Component, OnInit } from '@angular/core';
import { Units } from '../../interfaces/units';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmiService } from '../../services/admi.service';

@Component({
  selector: 'app-dashboard-admi-units',
  templateUrl: './dashboard-admi-units.component.html',
  styleUrls: ['./dashboard-admi-units.component.css'],
})
export class DashboardAdmiUnitsComponent implements OnInit {
  unitsData: Units | undefined;
  unitForm: FormGroup;
  selectedUnit: any = null;
  loader: boolean = false;
  showSuccessMessage: boolean = false;
  constructor(
    private admiService: AdmiService,
    private formBuilder: FormBuilder
  ) {
    this.unitForm = this.formBuilder.group({
      productId: [''],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.admiService.getUnits().subscribe(
      (data) => {
        console.log(data);

        this.unitsData = data; // Assuming the response structure matches the provided JSON

        console.log(this.unitsData.data);
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  determineAction(): void {
    const productId = this.unitForm.get('productId')?.value;

    if (productId) {
      this.updateUnit();
    } else {
      this.newUnit();
    }
  }
  showUnitDetails(unit: any) {
    // Cambia 'any' por el tipo adecuado para tus datos
    this.selectedUnit = unit;
    console.log(this.selectedUnit.id);
    this.unitForm.patchValue({
      // Asigna los valores del producto al formulario

      productId: this.selectedUnit.id,
      name: this.selectedUnit.name,
      // ...otros campos aquí...
    });
  }

  updateUnit() {
    if (this.unitForm.valid) {
      const productId = this.unitForm.get('productId')!.value;
      const name = this.unitForm.get('name')!.value;
      const code = this.unitForm.get('code')!.value;

      this.loader = true;
      this.admiService.updateUnitType(productId, name, code).subscribe(
        (response) => {
          console.log(response);
          this.updateUnitData();
          this.loader = false;
          this.showSuccessMessage = true; // Mostrar mensaje de éxito
          setTimeout(() => {
            this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
          }, 3000);
        },
        (error) => {
          this.loader = false;
          console.log(error);
        }
      );
    }
  }

  updateUnitData(): void {
    this.admiService.getUnits().subscribe(
      (data) => {
        console.log(data);

        this.unitsData = data; // Assuming the response structure matches the provided JSON

        console.log(this.unitsData.data);
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  newUnit(): void {
    console.log('actovadp');

    if (this.unitForm.valid) {
      const name = this.unitForm.get('name')!.value;
      const code = this.unitForm.get('code')!.value;

      this.admiService.setUnit(name, code).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  changeStatus(id: string): void {
    this.loader = true;
    this.admiService.changeStatusUnit(id).subscribe(
      (response) => {
        this.loader = false;
        console.log(response);
        this.updateUnitData();
        this.showSuccessMessage = true; // Mostrar mensaje de éxito
        setTimeout(() => {
          this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
        }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
