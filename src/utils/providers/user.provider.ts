import { TUser } from '@/interfaces';

export function userProvider() {
  const getUser = async () => {
    // const user = await axiosInstance.get<TApiResponse<TUser>>(process.env.API_URL + '/user/chank');
    const user: TUser = {
      name: 'Irsan Mansyur',
      username: 'chank',
      email: 'irsan00mansyur@gmail.com',
      password: '',
      gender: 'male',
      about: 'Memiliki keahlian mendalam di bidang Backend Development dengan NestJS (expert) dan Laravel (advanced), serta mahir dalam Frontend Development menggunakan ReactJS dan Next.js',
      sosmed: [
        { name: 'linkedin', url: 'https://www.linkedin.com/in/irsanmansyur/' },
        { name: 'github', url: 'https://github.com/irsanmansyur' },
        { name: 'Facebook', url: 'https://facebook.com/ichank00' },
      ],
    };
    return user;
  };
  return { getUser };
}
