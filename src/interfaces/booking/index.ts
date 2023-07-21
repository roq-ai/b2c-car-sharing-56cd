import { CarInterface } from 'interfaces/car';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  car_id: string;
  guest_id: string;
  booking_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  car_id?: string;
  guest_id?: string;
  status?: string;
}
