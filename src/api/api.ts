import { Order, Dish, Drink } from "../../../orders-api/src/types";

const getDish = async () => {
  const res = await fetch("https://themealdb.com/api/json/v1/1/random.php");

  if (!res.ok) {
    throw new Error("Failed to fetch dish");
  }

  const response = await res.json();

  return response;
};

const getDrinks = async () => {
  const res = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch drink");
  }

  const response = await res.json();

  return response;
};

const getOrderFromEmail = async (email: string): Promise<Order> => {
  const res = await fetch(`http://localhost:3001/api/order/${email}`);

  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }

  const response = await res.json();

  return response;
};

const postNewOrder = async (order: Order) => {
  const res = await fetch('http://localhost:3001/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...order,
      name: "Test",
    }),
  });
  const data = await res.json();
  if (!data.success) {
    console.log(data.error)
  }
}

export default {
  getDish,
  getDrinks,
  getOrderFromEmail,
  postNewOrder,
};
