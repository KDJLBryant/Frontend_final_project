import { useOrderContext } from "@/context/OrderContext";
import { useEffect, useState } from "react";
import { Dish, Order } from "../../../../orders-api/src/types";
import api from "@/api/api";
import mapper from "@/utils/mapper";

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
    <>
      <div className="dish-display-wrapper">
        <div className="dish-display-content">
          <button className="custom-button" onClick={fetchDishDisplay}>
            New
          </button>
          {dishDisplay && <img
            className="dish-image"
            src={dishDisplay.imageSource}
            alt="Dish Image"
          />}
        </div>
        {dishDisplay && (
          <div className="dish-display-content">
            <h1 className="header-card">{dishDisplay.name} - £{dishDisplay.price}</h1>
            <p className="item-description-card">{dishDisplay.description}</p>
          </div>
        )}
      </div>

      <div className="selected-dish-wrapper">
        <button className="custom-button" onClick={updateOrderDish}>
          Select Dish
        </button>
        {order && order.dish.id && (
          <div className="flex items-center justify-around header-card">
            <p>Selected Dish: {order.dish.name}</p>
            <img
              className="size-1/4 p-2"
              src={order.dish.imageSource}
              alt="Selected Dish"
            ></img>
          </div>
        )}
      </div>
    </>
  );
};

export default DishSelect;
