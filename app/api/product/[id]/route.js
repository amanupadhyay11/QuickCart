import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Product from '@/models/Product';
import mongoose from 'mongoose';

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    console.log('Deleting product with ID:', id); // Debug log

    // Optional: Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: 'Invalid ID' }, { status: 400 });
    }

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Product deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
