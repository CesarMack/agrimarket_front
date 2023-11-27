export interface ProductType {
  data: ProductData[];
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  active: string;
  created_at: string;
  updated_at: string;
}
