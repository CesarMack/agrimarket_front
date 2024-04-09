import { Component, OnInit } from '@angular/core';
import { Category, CategoryData } from '../../interfaces/category';
import { AdmiService } from '../../services/admi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Suggestions } from '../../interfaces/suggestions';
import { ProductType } from '../../interfaces/productType';

@Component({
  selector: 'app-dashboard-admi-categories-page',
  templateUrl: './dashboard-admi-categories-page.component.html',
})
export class DashboardAdmiCategoriesPageComponent implements OnInit {
  categoriesData: Category | undefined;
  dataOriginal: Category | undefined;
  productForm: FormGroup;
  searchForm: FormGroup;
  suggestionsData: Suggestions | undefined;
  productsData: ProductType | undefined;
  selectedProduct: any = null;
  loader: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: String = '';
  loading: boolean = false;
  constructor(
    private admiService: AdmiService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      productId: [''],
      name: ['', [Validators.required]],
      units: ['', [Validators.required]],
      categories: ['', Validators.required],
    });
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Ahora, ejecutemos getSuggestions() y almacenemos los datos en suggestionsData
    this.admiService.getSuggestions().subscribe(
      (data) => {
        this.suggestionsData = data;
      },
      (error) => {
        console.error('Error fetching suggestions data:', error);
      }
    );
    this.admiService.getCategory().subscribe(
      (data) => {
        this.dataOriginal = data;
        this.categoriesData = {
          data: this.dataOriginal.data.filter(
            (category) => category.active === 1
          ),
        };
        this.productForm.patchValue({
          categories: this.categoriesData.data,
          // ...otros campos aquí...
        });
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );

    this.admiService.getProductType().subscribe(
      (data) => {
        this.productsData = data;
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  determineAction(): void {
    const productId = this.productForm.get('productId')?.value;

    if (productId) {
      this.updateProduct();
    } else {
      this.newProductType();
    }
  }
  showProductDetails(product: any) {
    // Cambia 'any' por el tipo adecuado para tus datos
    this.selectedProduct = product;
    this.productForm.patchValue({
      productId: this.selectedProduct.id,
      name: this.selectedProduct.name,
      categories: this.selectedProduct.category,
    });
  }

  updateProduct() {
    if (this.productForm.valid) {
      const productId = this.productForm.get('productId')!.value;
      const name = this.productForm.get('name')!.value;
      const categories = this.productForm.get('categories')!.value;

      const selectedOption = this.categoriesData?.data.find(
        (item) => item.name === categories
      );

      this.loader = true;
      this.admiService
        .updateProductType(productId, name, selectedOption?.id!)
        .subscribe(
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
          }
        );
    }
  }

  searchProductType(): void {
    if (this.searchForm.valid) {
      const search = this.searchForm.get('search')!.value;

      this.admiService.findProductType(search).subscribe(
        (data) => {
          this.productsData = data;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }

  newProductType(): void {
    if (this.productForm.valid) {
      const name = this.productForm.get('name')!.value;
      const units = this.productForm.get('units')!.value;
      const categories = this.productForm.get('categories')!.value;
      const selectedOption = this.categoriesData?.data.find(
        (item) => item.name === units
      );

      console.log(units);
      console.log(categories);

      console.log(selectedOption);

      this.loader = true;
      this.admiService.setProductType(name, selectedOption?.id!).subscribe(
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
          this.showErrorMessage = true; // Mostrar mensaje de error
          setTimeout(() => {
            this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
          }, 3000);
        }
      );
    } else {
      this.errorMessage =
        'Por favor, completa todos los campos antes de enviar el formulario.';
      this.showErrorMessage = true; // Mostrar mensaje de error
      setTimeout(() => {
        this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
      }, 3000);
    }
  }

  updateCategoryData(): void {
    this.admiService.getProductType().subscribe(
      (data) => {
        this.productsData = data;
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }
  updateSuggestionsData(): void {
    this.admiService.getSuggestions().subscribe(
      (data) => {
        this.suggestionsData = data;
      },
      (error) => {
        console.error('Error fetching suggestions data:', error);
      }
    );
  }

  changeStatus(id: string): void {
    this.loader = true;
    this.admiService.changeStatus(id).subscribe(
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

  updateSuggestionStatus(id: string): void {
    this.loader = true;
    this.admiService.updateStatusSuggestion(id).subscribe(
      (response) => {
        this.loader = false;
        this.updateSuggestionsData();
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
