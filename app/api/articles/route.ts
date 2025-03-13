import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.API_URL}/krontiva_articles`);
    
    if (!response.ok) {
      return NextResponse.json(
        { message: 'Unable to load articles' },
        { status: response.status }
      );
    }

    const articles = await response.json();
    return NextResponse.json(articles);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Articles fetch error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to load articles at this time' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const token = request.headers.get('Authorization');
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const response = await fetch(`${process.env.API_URL}/krontiva_articles`, {
      method: 'POST',
      headers: {
        'Authorization': token,
        ...request.headers
      },
      body: await request.blob()
    });

    const responseData = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to publish article' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article creation error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to publish article at this time' },
      { status: 500 }
    );
  }
} 