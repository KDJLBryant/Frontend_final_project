"use client";
import api from "@/api/api";
import PageRouter from "@/components/PageRouter";
import { useOrderContext } from "@/context/OrderContext";
import { useEffect, useState } from "react";
import { Order, Dish, Drink } from "../../../../orders-api/src/types";
import mapper from "@/utils/mapper";
import { getRandomNumber } from "@/utils/getRandomNumber";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return (
    <div>
      <PageRouter route="/" buttonText="Back" />
      {order?.dish.name && <PageRouter route="/bookOrder" buttonText="Next" />}
    </div>
  );
};

const DrinkSelect = () => {
  const { order } = useOrderContext();
  const [drinksDisplay, setDrinksDisplay] = useState<Drink[] | null>(null);

  const fetchDrinksDisplay = async () => {
    const fetchedDrinks = await api.getDrinks();

    if (fetchedDrinks) {
      setDrinksDisplay(() => {
        const drinksForReturn: Drink[] = [];
        for (let i = 0; i <= 5; i++) {
          drinksForReturn.push(
            mapper.mapDrink(
              fetchedDrinks.drinks[
                getRandomNumber(0, fetchedDrinks.drinks.length)
              ]
            )
          );
        }
        return drinksForReturn;
      });
    } else {
      console.log("Failed to fetch drinks");
    }
  };
  useEffect(() => {
    fetchDrinksDisplay();
  }, [order?.dish]);
  console.log(drinksDisplay);

  return (
    order?.dish.name && (
      <div>
        <p>Select Drink</p>
        {drinksDisplay?.map((drink) => (
          <div key={drink.id}>
            <p>{drink.name}</p>
          </div>
        ))}
      </div>
    )
  );
};

const DishSelect = () => {
  const { order, setOrder } = useOrderContext();
  const [dishDisplay, setDishDisplay] = useState<Dish | null>(null);

  const updateOrderDish = () => {
    if (order && dishDisplay) {
      const updatedOrder: Order = {
        ...order,
        dish: dishDisplay,
      };
      setOrder(updatedOrder);
    }
  };

  const fetchDishDisplay = async () => {
    const fetchedDish = await api.getDish();

    if (fetchedDish) {
      setDishDisplay(mapper.mapDish(fetchedDish.meals[0]));
    } else {
      console.log("Failed to fetch dish");
    }
  };
  useEffect(() => {
    fetchDishDisplay();
  }, []);

  return (
    <div>
      <button className="border" onClick={fetchDishDisplay}>
        New
      </button>
      {dishDisplay && (
        <div>
          <p>{dishDisplay.name}</p>
          <button className="border" onClick={updateOrderDish}>
            Select Dish
          </button>
        </div>
      )}
      {order?.dish && <p>{order.dish.name}</p>}
    </div>
  );
};

const MakeOrder = () => {
  return (
    <div>
      <div className="bg-blue-500">
        <DishSelect />
      </div>
      <DrinkSelect />
      <PageNavigator />
    </div>
  );
};

export default MakeOrder;
