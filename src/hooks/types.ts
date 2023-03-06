
export interface Profile {
  id: number;
  country: string;
  mame: string;
  surname: string;
  phoneNumber: number;
  mail: string;
  posts?: Post[];
}

export interface Post {
  active: boolean;
  city_id: string;
  city_name: string;
  country_code: string;
  createdat: string;
  delete: boolean;
  image?: string;
  makeid: string;
  make: string;
  model_id: string;
  model: string;
  phone: string;
  sort: number;
  typeid: string;
  typename: string;
  updatedat: string;
  user_id: string;
  vin: string;
  year: string;
  __v: number;
  id: string;
}
