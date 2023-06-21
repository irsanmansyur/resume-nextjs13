import { TSetting } from './setting.type';
import { TSosmed } from './sosmed.type';

export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
}
export type TUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  gender: EGender;
  about: string;
  sosmed: TSosmed[];
  deletedAt?: string | null;
  settings?: TSetting[];
};
