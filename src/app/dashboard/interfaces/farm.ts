export interface Farm {
  data: Data;
}

export interface Data {
  id: string;
  user_id: string;
  name: string;
  phone: string;
  street: string;
  ext_num: string;
  int_num: string;
  suburb: string;
  city: string;
  state: string;
  zip_code: string;
  photo: string;
  active: number;
  created_at: Date;
  updated_at: Date;
}
