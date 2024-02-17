import React, { memo } from "react";
import { useSelector } from "react-redux";
import ConfirmOrderCard from "./ConfirmOrderCard";

const ConfirmOrderList = (orderItems) => {
  return (
    <section id="confirmOrderList">
      <div className=" items-start  flex flex-col gap-[20px] md:items-start item-center">
        <div className="confirm_heading">
          <h1>Your Cart Items</h1>
        </div>
        {orderItems &&
          orderItems.map((item, index) => (
            <ConfirmOrderCard {...item} key={index} />
          ))}
      </div>
    </section>
  );
};

export default memo(ConfirmOrderList);
