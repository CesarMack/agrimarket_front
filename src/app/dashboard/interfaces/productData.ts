export interface ProductData {
  data: Data;
}

export interface Data {
  id: string;
  user_id: string;
  product: string;
  description: string;
  price: string;
  measure: string;
  stock: string;
  minimum_sale: string;
  cutoff_date: Date;
  photos: Photo[];
  created_at: Date;
  updated_at: Date;
}

export interface Photo {
  id: string;
  url: string;
}
