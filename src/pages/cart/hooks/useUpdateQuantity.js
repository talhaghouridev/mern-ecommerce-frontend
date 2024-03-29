import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LocalStorage from "@utils/LocalStorage";
import { CART_ITEMS } from "@constants/index";
import { addToCart } from "@redux/reducers/cartReducer";

const localStorageItem = (productId) => {
  const cartItems = LocalStorage.get(CART_ITEMS) || [];
  return cartItems
    ?.filter((item) => item?._id === productId)
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, []);
};
const useUpdateQuantity = (productId) => {
  const [isAddCart, setIsAddCart] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateQuantity = useCallback(
    (id, quantity) => {
      const { name, description, price, images, category, _id, stock } =
        localStorageItem(id);

      dispatch(
        addToCart({
          name,
          description,
          price,
          images,
          category,
          _id,
          stock,
          quantity: quantity,
        })
      );
      setIsAddCart(true);
    },
    [dispatch]
  );

  useEffect(() => {
    const cartItems = localStorageItem(productId);
    cartItems?.quantity ? setIsAddCart(true) : setIsAddCart(false);
  }, [localStorageItem, productId, handleUpdateQuantity]);

  return {
    handleUpdateQuantity,
    isAddCart,
  };
};

export { useUpdateQuantity, localStorageItem };
