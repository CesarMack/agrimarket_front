export interface Catalog {
  data: Data[];
}

export interface Data {
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
