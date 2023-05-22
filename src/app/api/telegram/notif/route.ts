import { NextResponse, NextRequest } from 'next/server';
import { telegramService } from '../telegram.service';
export async function POST(request: NextRequest) {
  const payload = (await request.json()) || {};
  const { sendMessage, botChatId } = telegramService();
  // Menangani pesan yang diterima oleh bot
  sendMessage(botChatId, `Anda mengirim pesan: \n${JSON.stringify(payload)}`);
  return NextResponse.json({ data: payload ?? {} });
}
