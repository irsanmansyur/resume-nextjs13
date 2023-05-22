import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();
const botToken = process.env.TELEGRAM_BOT_TOKEN || '';
const botChatId = process.env.TELEGRAM_BOT_CHATID || '';
const bot = new TelegramBot(botToken, { polling: true });

export function telegramService() {
  const sendMessage = async (chatId: string, message: string): Promise<void> => {
    bot.sendMessage(chatId, message);
  };
  return { bot, botChatId, botToken, sendMessage };
}
