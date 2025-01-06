import { NextRequest, NextResponse } from 'next/server';
import { getProductsService, getProductByIdService } from '@/modules/products/services';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')

  try {
    let response;
    if (id) response = await getProductByIdService(id)
    else {
      response = await getProductsService()
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch Products' }, { status: 500 });
  }
}