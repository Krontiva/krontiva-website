import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization');
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const response = await fetch(`${process.env.API_URL}/auth/me`, {
      headers: {
        'Authorization': token
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to fetch user details' },
        { status: response.status }
      );
    }

    const userData = await response.json();
    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json(
      { message: 'Unable to fetch user details at this time' },
      { status: 500 }
    );
  }
} 