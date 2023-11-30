export interface Order {
  data: Data;
}

export interface Data {
  id: string;
  product: Product;
  client: Client;
  measure: Measure;
  farmer_id: string;
  quantity: string;
  total: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  street: string;
  ext_num: string;
  int_num: string;
  suburb: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface Measure {
  id: string;
  name: string;
  code: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  cutoff_date: Date;
  price_per_measure: string;
  description: string;
  photo: string;
}
