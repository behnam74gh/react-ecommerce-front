import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: { authtoken: `bearer ${authtoken}` },
  });

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: { authtoken: `bearer ${authtoken}` },
  });

export const saveUserAddress = async (address, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/address`,
    { address },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const applyCoupon = async (coupon, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/coupon`,
    { coupon },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const createOrder = async (stripeResponse, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const getUserOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/orders`, {
    headers: { authtoken: `bearer ${authtoken}` },
  });

export const getWishlist = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: { authtoken: `bearer ${authtoken}` },
  });

export const removeWishlist = async (productId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/user/wishlist/${productId}`,
    {},
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const addToWishlist = async (productId, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/wishlist`,
    { productId },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );

export const createCashOrderForUser = async (authtoken, COD, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cash-order`,
    { COD, couponApplied: coupon },
    {
      headers: { authtoken: `bearer ${authtoken}` },
    }
  );
