import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import { products } from "../constants/index";

function Product() {
  const { id } = useParams();
  const { imgURL, imgDark, name, price, rating } = products.find(
    (x) => x.id == parseInt(id)
  );
  return (
    <div>
      <Nav />
      {name}
    </div>
  );
}

export default Product;
