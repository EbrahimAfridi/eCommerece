import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";

const Filter = () => {
  const { sortProducts, sortOption } = useContext(ShopContext);

  return (
    <div className="justify-center items-end text-right p-0 h-fit mb-0 m-4">
      <select
        className="rounded-md text-md outline-none border-zinc-300 hover:border-zinc-600 shadow border p-2 tracking-wider"
        value={sortOption || "filter"}
        onChange={(e) => sortProducts(e.target.value)}
      >
        <option value="Filter">Filters</option>
        <option value="Filter">Clear</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
