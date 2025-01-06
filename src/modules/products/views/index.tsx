import ProductTable from "../components/ProductTable";
import { getProductsService } from "../services";

const ProductsView = async () => {
  const products = await getProductsService();

  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsView