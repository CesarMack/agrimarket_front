export interface ProductData {
  data: Data;
}

export interface Data {
  id: string;
  user: User;
  product: string;
  description: string;
  price: string;
  measure: Measure;
  stock: string;
  minimum_sale: string;
  cutoff_date: Date;
  photos: Photo[];
  created_at: Date;
  updated_at: Date;
}

export interface Measure {
  id: string;
  name: string;
  code: string;
}

export interface Photo {
  id: string;
  url: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  photo: string;
}
