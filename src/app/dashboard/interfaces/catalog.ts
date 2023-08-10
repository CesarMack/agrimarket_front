export interface Catalog {
  data: CatalogData[];
}

export interface CatalogData {
  id: string;
  user_id: string;
  price: string;
  measure: string;
  minimum_sale: string;
  cutoff_date: Date;
  photos: Photo[];
  created_at: Date;
  updated_at: Date;
}

export interface Photo {
  photo: string;
}
