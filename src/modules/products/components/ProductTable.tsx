import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import Image from "next/image";
import Heading from "../../dashboard/components/Heading";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { Product } from "@prisma/client";


const ProductTable = async (props: { products: Product[] }) => {
  const { products } = props;

  return (
    <div>
      <Heading title="Products" link="/dashboard/products/add" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Name</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell >{product.name}</TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.price}</TableCell>
              <TableCell className="text-center">{product.quantity}</TableCell>
              <TableCell className="text-center">
                <Image src={product.image!} alt={product.name} width={50} height={50} className="rounded-full m-auto" />
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2 items-center">
                  <Button variant="ghost" asChild>
                    <Link href={`/dashboard/products/${product.id}`} >
                      <Edit />
                    </Link>
                  </Button>
                  <Button variant="ghost">
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">{products.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

  )
}
export default ProductTable