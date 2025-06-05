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
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Forward the request body as is
    const response = await fetch(`${process.env.API_URL}/krontiva_articles`, {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: await request.formData()
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to create article' },
        { status: response.status }
      );
    }

    const article = await response.json();
    return NextResponse.json(article);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article creation error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to create article at this time' },
      { status: 500 }
    );
  }
} 