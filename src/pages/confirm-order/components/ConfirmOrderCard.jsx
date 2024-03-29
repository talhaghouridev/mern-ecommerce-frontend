import { memo } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { Image } from "@components/ui";

const CartCard = ({ name, price, _id, images, quantity, image }) => {
  return (
    <div
      className="w-full rounded-[10px] relative overflow-hidden flex  sm:flex-row flex-col max-w-[270px] sm:max-w-full"
      style={{
        boxShadow: "#2b34451a 0px 4px 16px",
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src={image ? image : images && images[0]?.url}
          alt={name}
          className={" max-w-full h-[120px] w-[200px] object-contain"}
        />
      </div>
      {/* Cart Item Detials */}
      <div className="flex items-center justify-evenly sm:gap-y-[16px] gap-y-[10px]  p-[16px] w-full sm:flex-row flex-col">
        <Link
          to={`/product/${_id}`}
          className="text-[#2b3445] text-[20px] font-PoppinsBold"
        >
          <h1>{capitalize(String(name))}</h1>
        </Link>
        <div>
          <span className="text-[#d23f57] text-[15px] md:text-[18px] font-Sans  ">
            {quantity} X ${price} ={" "}
            <b className="font-Poppins">${price * quantity}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(CartCard);
