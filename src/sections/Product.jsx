import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import { products } from "../constants/index";
import { star } from "../assets/icons";
import Button from "../Components/Button";
import PopularProductsCard from "../Components/PopularProductsCard";

function Product({ darkMode }) {
  const { id } = useParams();
  const { imgURL, imgDark, name, price, rating } = products.find(
    (x) => x.id == parseInt(id)
  );
  return (
    <div>
      <Nav />
      <div className="flex flex-1 justify-evenly items-center mt-10">
        <img src={imgURL} alt={name} width={350} />
        <div className="flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-palanquin font-bold">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-montserrat">${price}</p>
            <div className="flex justify-start gap-2.5">
              <img src={star} alt="rating icon" width={12} height={12} />
              <p className="font-montserrat text-lg dark:text-slate-300">
                {rating}
              </p>
            </div>
          </div>

          <p className="font-strong mt-6">Select Size :</p>
          <select
            name="size"
            id="size"
            className="p-2 m-2 mb-5 rounded-full px-3 text-center"
          >
            <option value="11C">11C</option>
            <option value="12C">12C</option>
            <option value="13C">13C</option>
            <option value="1Y">1Y</option>
            <option value="2Y">2Y</option>
            <option value="3Y">3Y</option>
          </select>
          <Button label="buy" fullWidth />
          <p className="text-sm">4 interest-free payments of ${price / 4}</p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center">
        <h2 className="text-2xl font-palanquin font-bold dark:text-slate-50 mt-20 text-center mb-10">
          <span className="text-coral-red">Discover</span> other shoes!
        </h2>
        <div className="flex flex-1 max-h-2">
          {products
            .filter((x) => x.id != id)
            .map((item) => (
              <PopularProductsCard
                key={item.name}
                {...item}
                darkMode={darkMode}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
