import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(`${process.env.API_URL}/krontiva_articles/${params.id}`);
    
    if (!response.ok) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: response.status }
      );
    }

    const article = await response.json();
    return NextResponse.json(article);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article fetch error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to load article at this time' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get('Authorization');
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const response = await fetch(`${process.env.API_URL}/krontiva_articles/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': token,
        ...Object.fromEntries(request.headers)
      },
      body: await request.blob()
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to update article' },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article update error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to update article at this time' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get('Authorization');
    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const response = await fetch(`${process.env.API_URL}/krontiva_articles/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': token
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Failed to delete article' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Article deleted successfully' });
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article deletion error:', error);
    }
    return NextResponse.json(
      { message: 'Unable to delete article at this time' },
      { status: 500 }
    );
  }
} 