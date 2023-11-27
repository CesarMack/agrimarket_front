import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../interfaces/productType';
import { FarmerService } from '../../services/farmer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Units } from '../../interfaces/units';
import { DatePipe } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-product-page',
  templateUrl: './details-product-page.component.html',
  styleUrls: ['./details-product-page.component.css'],
})
export class DetailsProductPageComponent implements OnInit {
  imageFiles: Array<File> = [];
  selectedImages: { file: File | null; previewUrl: string | null }[] = [];
  productsType: ProductType | undefined;
  units: Units | undefined;
  productForm: FormGroup;
  productId: string = '';

  constructor(
    private farmerService: FarmerService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      units: [''],
      minimumSale: [''],
      date: [''],
      stock: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.farmerService.getProductType().subscribe(
      (data) => {
        console.log('CAtegorias en tipos de productos');

        console.log(data);

        this.productsType = data;

        this.productForm.patchValue({
          name: this.productsType.data,
        });
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );

    this.farmerService.getUnits().subscribe(
      (data) => {
        console.log('CAtegorias en tipos de productos');

        console.log(data);

        this.units = data;
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );

    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      this.productId = params['id']; // Convierte el parámetro a número si es necesario
      // Luego, puedes usar this.productId para cargar la información del producto

      if (params['id']) {
        this.farmerService.getInfoProduct(this.productId).subscribe(
          (data) => {
            console.log('Data producto id');

            console.log(data); // Llena los campos del formulario con la información obtenida
            this.productForm.patchValue({
              name: data.data.product,
            });
            console.log(data.data.product);

            this.productForm.get('name')?.setValue(data.data.product);
            this.productForm.get('units')?.setValue(data.data.measure);

            this.productForm.patchValue({
              minimumSale: data.data.minimum_sale,
            });
            this.productForm.patchValue({
              stock: data.data.stock,
            });
            this.productForm.patchValue({
              price: data.data.price,
            });
            this.productForm.patchValue({
              description: data.data.description,
            });

            //Revisar la cuestion de los meses esta un dia menos
            this.productForm
              .get('date')
              ?.setValue(new Date(data.data.cutoff_date));

            this.selectedImages = data.data.photos.map((photo: any) => ({
              file: null, // Puedes ajustar esto según tus necesidades
              previewUrl: photo.photo,
            }));
          },
          (error) => {
            console.error('Error fetching CP data:', error);
          }
        );
      }
      console.log(this.productId);
    });
  }
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file: File | null = files.item(i);

      if (file) {
        // Crear una URL de objeto para la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push({ file, previewUrl: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.selectedImages.splice(index, 1);
  }
  selectedProductName: string = '';

  getSelectedProductCategory(): string {
    const selectedProduct = this.productsType?.data.find(
      (product) => product.name === this.selectedProductName
    );
    return selectedProduct ? selectedProduct.category : '';
  }

  newProduct(): void {
    const product_type = this.productForm.get('name')!.value;
    const product_type_id = this.productsType?.data.find(
      (item) => item.name === product_type
    );
    const unit_of_measurement = this.productForm.get('units')!.value;
    const unit_of_measurement_id = this.units?.data.find(
      (item) => item.name === unit_of_measurement
    );
    const minimum_sale = this.productForm.get('minimumSale')!.value;
    const cutoff_date = this.datePipe.transform(
      this.productForm.get('date')!.value,
      'yyyy/MM/dd'
    );
    const stock = this.productForm.get('stock')!.value;
    const price_per_measure = this.productForm.get('price')!.value;
    const description = this.productForm.get('description')!.value;

    const data = {
      product_type_id: product_type_id?.id,
      cutoff_date: cutoff_date,
      description: description,
      price_per_measure: price_per_measure,
      stock: stock,
      minimum_sale: minimum_sale,
      unit_of_measurement_id: unit_of_measurement_id?.id,
    };

    console.log('Data de Product');

    console.log(data);
    console.log(product_type_id?.id);

    if (this.productId) {
      console.log('Update');
    } else {
      console.log('Create');

      this.farmerService.createProduct(data).subscribe(
        (response) => {
          console.log(response);
          this.uploadImages(response)
            .then(() => {
              console.log('All images uploaded successfully.');
            })
            .catch((error) => {
              console.log('Error uploading images:', error);
            });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  async uploadImages(id: string): Promise<void> {
    console.log('Starting image upload...');

    // Obtén las fotos y súbelas una por una
    for (const { file } of this.selectedImages) {
      console.log(file);
      if (file instanceof File) {
        console.log('Dentro del if de uploadImages');
        try {
          const response = await lastValueFrom(
            this.farmerService.uploadPhoto(file, id)
          );
          console.log('Photo uploaded:', response);
        } catch (error) {
          console.log('Error uploading photo:', error);
        }
      }
    }
  }
}
