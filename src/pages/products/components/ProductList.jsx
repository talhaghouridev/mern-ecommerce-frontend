import ProductCard from "@components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductLoading from "@components/ProductLoading";

const ProductList = () => {
  const { products, isLoading } = useFetchProducts();
  return (
    <section id="productList">
      <div className="product_grid">
        {isLoading && <ProductLoading length={8} />}

        {products &&
          products?.map((product) => (
            <ProductCard {...product} key={product?._id} />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
