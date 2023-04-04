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

export interface IEvents {
  event: string;
  field: string;
  date: Date;
  time: Date;
  description: string;
  attending: [any];
}
