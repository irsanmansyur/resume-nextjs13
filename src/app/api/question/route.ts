import { NextResponse, NextRequest } from 'next/server';
import { questionValidate } from './dto';
import { PrismaClient } from '@prisma/client';
import { telegramService } from '../telegram/telegram.service';
const prisma = new PrismaClient();

export async function GET() {
  const quastions = await prisma.questions.findMany();
  return NextResponse.json({ data: quastions });
}
export async function POST(request: NextRequest) {
  const { data, error } = questionValidate(await request.json());
  if (error) return NextResponse.json({ message: 'Gagal', errors: error }, { status: 422 });

  await prisma.questions.create({
    data,
  });
  const { sendMessage, botChatId } = telegramService();
  // Menangani pesan yang diterima oleh bot
  sendMessage(botChatId, `Question Masuk : \nName \t : ${data.name}\nEmail \t : ${data.email}\nMessage \t : ${data.subject}\nMessage \t : ${data.message}`);
  return NextResponse.json({ data: 'quastion' });
}
