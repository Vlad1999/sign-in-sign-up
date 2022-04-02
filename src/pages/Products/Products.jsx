import { useSelector } from "react-redux";
import { selectProducts } from "../../features/products/productsSlice";

const Home = () => {
  const products = useSelector(selectProducts);

  return (
    <>
      {products ? (
        <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Home;
