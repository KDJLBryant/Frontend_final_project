import { useOrderContext } from "@/context/newOrderContext";
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

export default DishSelect;
