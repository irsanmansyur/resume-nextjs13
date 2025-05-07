import { EGender, TUser } from '@/interfaces';

export function userProvider() {
  const getUser = async () => {
    // const user = await axiosInstance.get<TApiResponse<TUser>>(process.env.API_URL + '/user/chank');
    const user: TUser = {
      name: 'Irsan Mansyur',
      username: 'chank',
      email: 'irsan00mansyur@gmail.com',
      password: '',
      gender: EGender.MALE,
      about: 'saya seorang pengembang web. mahir menggunakan php dan nodejs, saya bisa menggunakan framework codeigniter dan laravel, untuk nodejs saya menggunakan nestjs, reactjs, jquery dan nextjs, dll',
      sosmed: [{ name: 'Facebook', url: 'https://facebook.com/ichank00' }],
    };
    return user;
  };
  return { getUser };
}
