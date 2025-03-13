import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Authentication error:', error);
    }
    return NextResponse.json(
      { message: 'An error occurred during authentication' },
      { status: 500 }
    );
  }
} 