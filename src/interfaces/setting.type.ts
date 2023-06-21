import { TUser } from './user.iterface';

export type TSetting = {
  type: string;
  data: object | object[];
  user_id: number;
  user?: TUser;
};

export type TQuestion = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
