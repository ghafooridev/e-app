import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter, Button } from '@/components/ui';
import { FC } from 'react';
import Link from 'next/link';
import { PrismaType } from '@/lib/prisma';

const ProductItem: FC<PrismaType.Product> = ({ name, description, category, price, image }) => {

  return (
    <Card className="max-w-[400px] transform transition-transform duration-300 hover:scale-105">
      <Link href="/">
        <CardHeader>
          <div className="relative w-full h-[300px]">
            <Image src={image!} alt={name} fill className="rounded-t-lg object-cover" />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">{category}</p>
          <p className="mt-2 text-ellipsis overflow-hidden whitespace-nowrap">{description}</p>
          <p className="mt-4 text-lg font-semibold">${price?.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <Button className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;