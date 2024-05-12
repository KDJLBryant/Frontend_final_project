"use client";
import PageRouter from "@/components/PageRouter";
import { useOrderContext } from "@/context/newOrderContext";
import DrinkSelect from "@/components/makeOrder/drinkSelect";
import DishSelect from "@/components/makeOrder/dishSelect";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return (
    <div>
      <PageRouter route="/" buttonText="Back" />
      {order?.dish.name && <PageRouter route="/bookOrder" buttonText="Next" />}
    </div>
  );
};

const MakeOrder = () => {
  return (
    // Colours just for visual debug
    // change when designing
    <div>
      <div className="bg-blue-500">
        <DishSelect />
      </div>
      <div className="bg-red-500">
        <DrinkSelect />
      </div>
      <PageNavigator />
    </div>
  );
};

export default MakeOrder;
