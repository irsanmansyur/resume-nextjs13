import axiosInstance from '@/axios-instance';
import { TApiResponse, TUser } from '@/interfaces';

export function userProvider() {
  const getUser = async () => {
    const user = await axiosInstance.get<TApiResponse<TUser>>(process.env.API_URL + '/user/chank').catch(() => null);
    if (!user) return null;
    return user.data.data;
  };
  return { getUser };
}
