import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Remove trailing slash from API_URL if it exists
    const apiUrl = process.env.API_URL?.replace(/\/$/, '');
    const response = await fetch(`${apiUrl}/krontiva_articles`);
    
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

    // Get the FormData
    const formData = await request.formData();

    // Log FormData contents in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Route - FormData contents:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value instanceof File ? `File: ${value.name}` : value);
      }
    }

    // Validate required fields
    const requiredFields = ['title', 'slug', 'category', 'excerpt', 'content', 'date', 'authors_id'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Check if image is provided
    const image = formData.get('image');
    if (!image) {
      return NextResponse.json(
        { message: 'Image is required' },
        { status: 400 }
      );
    }

    // If image is a string (JSON), parse it to ensure it's valid
    if (typeof image === 'string') {
      try {
        JSON.parse(image);
      } catch {
        return NextResponse.json(
          { message: 'Invalid image data' },
          { status: 400 }
        );
      }
    }

    // Remove trailing slash from API_URL if it exists
    const apiUrl = process.env.API_URL?.replace(/\/$/, '');

    // Forward the request to the external API
    const response = await fetch(`${apiUrl}/krontiva_articles`, {
      method: 'POST',
      headers: {
        'Authorization': token,
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to create article' }));
      console.error('API Error:', errorData); // Log the error details
      return NextResponse.json(
        { message: errorData.message || 'Failed to create article' },
        { status: response.status }
      );
    }

    const article = await response.json();
    return NextResponse.json(article);
  } catch (error) {
    // Log error details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Article creation error:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
    }
    return NextResponse.json(
      { message: 'Unable to create article at this time' },
      { status: 500 }
    );
  }
} 