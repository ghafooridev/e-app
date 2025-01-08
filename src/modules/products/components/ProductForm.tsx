import { ProductCategory } from '@prisma/client';
import { PrismaType } from '@/lib/prisma';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Input, Button, Textarea, Label } from '@/components/ui';

import { upsertProductService } from '../services';
import UploadFile from './UploadImage';


const ProductForm: React.FC<PrismaType.Product> = async ({ id, name, category, description, quantity, price }) => {
  return (
    <form action={upsertProductService} className="my-2 max-w-lg">
      <input type="hidden" name="id" defaultValue={id || ''} />
      <div className='my-2'>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </Label>
        <Input name="name" id="name" defaultValue={name || ''} required placeholder="Enter product name" />
      </div>

      <div className='my-2'>
        <Label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </Label>
        <Select name="category" required defaultValue={category}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ProductCategory).map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='my-2'>
        <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </Label>
        <Textarea
          name="description"
          id="description"
          defaultValue={description || ''}
          placeholder="Enter product description"
        />
      </div>

      <div className='my-2'>
        <UploadFile />
      </div>

      <div className='my-2'>
        <Label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </Label>
        <Input
          type="number"
          name="price"
          id="price"
          defaultValue={price?.toString() || ''}
          placeholder="Enter price"
          step="0.01"
        />
      </div>

      <div className='my-2'>
        <Label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </Label>
        <Input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue={quantity?.toString() || ''}
          placeholder="Enter quantity"
        />
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full">
          {id ? 'Update Product' : 'Add Product'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
