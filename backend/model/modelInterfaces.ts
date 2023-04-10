export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Ifield {
  name: string;
  lat: string;
  long: string;
}

export interface IEvent {
  event: string;
  field: string;
  date: string;
  time: string;
  description: string;
  attending: [];
  host: string;
}
