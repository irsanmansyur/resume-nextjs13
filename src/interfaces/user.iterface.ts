import { TSetting } from './setting.type';
import { TSosmed } from './sosmed.type';
export type TUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  gender: 'male' | 'female';
  about: string;
  sosmed: TSosmed[];
  deletedAt?: string | null;
  settings?: TSetting[];
};
