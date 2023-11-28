export interface Catalog {
  data: Product[];
}

export interface Product {
  id: string;
  user_id: string;
  product: string;
  price: string;
  measure: string;
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
