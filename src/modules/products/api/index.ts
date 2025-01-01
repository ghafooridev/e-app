import { NextResponse } from 'next/server';
import { getProducts } from '../services';

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}