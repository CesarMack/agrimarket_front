export interface Cards {
  data: Data;
}

export interface Data {
  completed: number;
  pending: number;
  canceled: number;
  products: number;
  completed_orders: number;
  total_orders: number;
  last_three_orders: LastThreeOrder[];
}
export interface LastThreeOrder {
  id: string;
  name: string;
  quantity: string;
  date: Date;
} /*
  completed_orders: Orders;
  total_orders: Orders;
  pending_orders: Orders;
  canceled_orders: Orders;
  orders_last_week: OrdersLastWeek;
  orders_last_month: OrdersLastMonth;
  orders_three_months: OrdersThreeMonths;
  orders_last_six_months: OrdersLastSixMonths;
  last_three_orders: LastThreeOrder[];
} */
/*
export interface Orders {
  week: number;
  month: number;
  six_months: number;
}



export interface OrdersLastMonth {
  'Semana 1': number;
  'Semana 2': number;
  'Semana 3': number;
  'Semana 4': number;
}

export interface OrdersLastSixMonths {
  October: number;
  September: number;
  August: number;
  July: number;
  June: number;
  May: number;
}

export interface OrdersLastWeek {
  Domingo: number;
  Lunes: number;
  Martes: number;
  Miércoles: number;
  Jueves: number;
  Viernes: number;
  Sábado: number;
}

export interface OrdersThreeMonths {
  October: number;
  September: number;
  August: number;
}
 */
