import { CDN_URL } from "../utils/constants";

const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-green-50 ">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees:{price / 100}</h4>
    </div>
  );
};
export default FoodItem;
