export interface Units {
  data: UnitData[];
}

export interface UnitData {
  id: string;
  name: string;
  code: string;
  active: number;
  created_at: string;
  updated_at: string;
}
