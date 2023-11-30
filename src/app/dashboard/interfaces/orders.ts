export interface Orders {
  data: Data[];
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
  phone: string;
  photo: string;
}

export interface Measure {
  id: string;
  name: string;
  code: string;
}

export interface Product {
  id: string;
  name: string;
  cutoff_date: Date;
  description: string;
}
