import React from "react";
import useOrderDetials from "../hooks/useOrderDetials";
import ProfileLoading from "../components/ProfileLoading";
import { MetaData } from "@components/ui";
import ConfirmOrderCard from "@pages/confirm-order/components/ConfirmOrderCard";
import OrderDetialList from "../components/OrderDetialList";

const OrderDetials = () => {
  const { isLoading, order, userInfo, address } = useOrderDetials();

  if (isLoading) {
    return <ProfileLoading />;
  }
  return (
    <>
      <MetaData title={`${order?._id || "Order Detials"}`} />
      <section id="orderDetials">
        <div className="flex flex-col ">
          <h1 className="order_heading">Order Detials</h1>

          <div className="flex flex-col gap-[20px] py-[20px] ">
            <div className="confirm_heading">
              <h1>Shipping Info</h1>
            </div>
            <ul className="flex flex-col gap-[15px] items-start justify-center]">
              <li className="order_li">
                <h2> Name:</h2>
                <span>{userInfo?.name}</span>
              </li>
              <li className="order_li">
                <h2> Phone:</h2>
                <span>{order.shippingInfo?.phoneNo}</span>
              </li>
              <li className="order_li">
                <h2> Address:</h2>
                <span> {address}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[20px] py-[20px] ">
            <div className="confirm_heading">
              <h1>Payment Info</h1>
            </div>
            <ul className="flex flex-col gap-[15px] items-start justify-center]">
              <li className="order_li">
                <h2> Payment Status:</h2>
                <span>{order.paymentInfo.status}</span>
              </li>
              <li className="order_li">
                <h2> Amount:</h2>
                <span>{order.totalPrice}</span>
              </li>
              <li className="order_li">
                <h2> Order Status:</h2>
                <span> {order.orderStatus}</span>
              </li>
            </ul>
          </div>

          <OrderDetialList orderItems={order?.orderItems} />
        </div>
      </section>
    </>
  );
};

export default OrderDetials;