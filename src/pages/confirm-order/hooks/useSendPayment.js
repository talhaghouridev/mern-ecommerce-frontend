import React, { useCallback, useEffect } from "react";
import { useSendPaymentMutation } from "@redux/api/paymentApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SessionStorage from "@utils/SessionStorage";
import { ORDER_INFO_KEY, USER_INFO_KEY } from "@constants/index";
import useConfirmPrice from "./useConfirmPrice";
import LocalStorage from "@utils/LocalStorage";

const useSendPayment = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { online, error } = useSelector((state) => state.onlineStatus);
  const { address, shippingCharges, subTotal, tax, totalPrice, totalProducts } =
    useConfirmPrice();
  const userInfo = LocalStorage.get(USER_INFO_KEY);
  const [sendPayment, { data, status, isLoading }] = useSendPaymentMutation();
  console.log(data, status, isLoading);

  if (data) {
    LocalStorage.set("Payment", { data, status });
  }
  const orderInfo = {
    subTotal,
    shippingCharges,
    tax,
    totalPrice,
  };

  //Handle Send Payment
  const handleSendPayment = useCallback(async () => {
    if (online) {
      await sendPayment({
        items: cartItems,
        userId: userInfo?._id,
        shippingInfo: shippingInfo,
      });
      SessionStorage.set(ORDER_INFO_KEY, orderInfo);
      console.log(cartItems);
    } else {
      toast.error(error);
    }
  }, [sendPayment, online]);

  const handleRedirect = useCallback(() => {
    if (data && data?.url) {
      window.location.href = data?.url;
    }
  }, [data]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);

  return {
    handleSendPayment,
    isLoading,
    address,
    shippingCharges,
    subTotal,
    tax,
    totalPrice,
    totalProducts,
  };
};

export default useSendPayment;
