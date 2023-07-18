import { NextResponse, NextRequest } from 'next/server';
import { questionValidate } from './dto';
import axiosInstance from '@/axios-instance';

export async function GET() {}
export async function POST(request: NextRequest) {
  const { data, error } = questionValidate(await request.json());
  if (error) return NextResponse.json({ message: 'Gagal', errors: error }, { status: 422 });
  await axiosInstance.post(`question`, data).catch((err) => {
    console.log(err?.message || 'Error Post question');
  });
  return NextResponse.json({ data: 'quastion' });
}
