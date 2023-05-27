import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function userProvider() {
  const getUser = () => {
    return prisma.users.findFirstOrThrow({
      where: { email: 'irsan00mansyur@gmail.com' },
      include: {
        Settings: {
          where: {
            type: 'sosial media',
          },
        },
      },
    });
  };
  return { getUser };
}
