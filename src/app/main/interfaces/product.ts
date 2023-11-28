export interface Product {
  data: Data;
}

export interface Data {
  id: string;
  user: User;
  estate: Estate;
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

export interface Estate {
  id: string;
  name: string;
  street: string;
  ext_num: string;
  int_num: string;
  suburb: string;
  city: string;
  state: string;
  zip_code: string;
  photo: string;
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
