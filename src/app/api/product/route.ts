import { NextResponse } from 'next/server';
import { getProducts } from '@/modules/products/services';

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch Products' }, { status: 500 });
  }
}