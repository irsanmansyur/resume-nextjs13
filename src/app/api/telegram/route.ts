import { parseUrlQuery } from '@/utils/url/query.url';
import { NextResponse, NextRequest } from 'next/server';
import { telegramService } from './telegram.service';
export async function GET(request: NextRequest) {
  const { message = 'hello' } = parseUrlQuery<{ message: string }>(request.url);
  const { sendMessage, botChatId } = telegramService();
  // Menangani pesan yang diterima oleh bot
  sendMessage(botChatId, `Anda mengirim pesan: ${message}`);

  return NextResponse.json({ hy: 'Okey' });
}
