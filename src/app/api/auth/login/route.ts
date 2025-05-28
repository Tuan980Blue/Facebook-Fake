import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phoneNumber, password } = body;

    // Luôn tạo user mới với dữ liệu được gửi lên
    const newUser = await prisma.user.create({
      data: {
        email: email || null,
        phoneNumber: phoneNumber || null,
        password: password, // Lưu password trực tiếp không mã hóa
      }
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Đăng nhập thành công',
      user: {
        id: newUser.id,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Có lỗi xảy ra' 
    }, { status: 500 });
  }
} 