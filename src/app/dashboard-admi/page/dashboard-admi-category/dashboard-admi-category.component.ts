import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { Category } from '../../interfaces/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admi-category',
  templateUrl: './dashboard-admi-category.component.html',
})
export class DashboardAdmiCategoryComponent implements OnInit {
  categoriesData: Category | undefined;
  categoryForm: FormGroup;
  selectedCategory: any = null;
  loader: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: String = '';
  constructor(
    private admiService: AdmiService,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      productId: [''],
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.admiService.getCategory().subscribe(
      (data) => {
        this.categoriesData = data;
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  determineAction(): void {
    const productId = this.categoryForm.get('productId')?.value;

    if (productId) {
      this.updateCategory();
    } else {
      this.newCategory();
    }
  }
  showCategoryDetails(product: any) {
    // Cambia 'any' por el tipo adecuado para tus datos
    this.selectedCategory = product;
    this.categoryForm.patchValue({
      // Asigna los valores del producto al formulario

      productId: this.selectedCategory.id,
      name: this.selectedCategory.name,
      // ...otros campos aquí...
    });
  }
  updateCategory() {
    if (this.categoryForm.valid) {
      const productId = this.categoryForm.get('productId')!.value;
      const name = this.categoryForm.get('name')!.value;

      this.loader = true;
      this.admiService.updateCategoryType(productId, name).subscribe(
        (response) => {
          this.updateCategoryData();
          this.loader = false;
          this.showSuccessMessage = true; // Mostrar mensaje de éxito
          setTimeout(() => {
            this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
          }, 3000);
        },
        (error) => {
          this.loader = false;
          this.errorMessage =
            'Se produjo un error en la operación. Por favor, intenta nuevamente.';
          this.showErrorMessage = true; // Mostrar mensaje de error
          setTimeout(() => {
            this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
          }, 3000);
        }
      );
    } else {
      this.errorMessage =
        'Se produjo un error en la operación. Por favor, intenta nuevamente.';
      this.showErrorMessage = true; // Mostrar mensaje de error
      setTimeout(() => {
        this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
      }, 3000);
    }
  }

  updateCategoryData(): void {
    this.admiService.getCategory().subscribe(
      (data) => {
        this.categoriesData = data;
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  newCategory(): void {
    if (this.categoryForm.valid) {
      const name = this.categoryForm.get('name')!.value;

      this.loader = true;
      this.admiService.setCategories(name).subscribe(
        (response) => {
          this.updateCategoryData();
          this.loader = false;
          this.showSuccessMessage = true; // Mostrar mensaje de éxito
          setTimeout(() => {
            this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
          }, 3000);
        },
        (error) => {
          this.loader = false;
          this.errorMessage =
            'Se produjo un error en la operación. Por favor, intenta nuevamente.';
          this.showErrorMessage = true; // Mostrar mensaje de error
          setTimeout(() => {
            this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
          }, 3000);
        }
      );
    } else {
      this.errorMessage =
        'Se produjo un error en la operación. Por favor, intenta nuevamente.';
      this.showErrorMessage = true; // Mostrar mensaje de error
      setTimeout(() => {
        this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
      }, 3000);
    }
  }

  changeStatus(id: string): void {
    this.loader = true;
    this.admiService.changeStatusCategories(id).subscribe(
      (response) => {
        this.loader = false;
        this.updateCategoryData();
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
