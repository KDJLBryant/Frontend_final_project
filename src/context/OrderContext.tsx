"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { Order, Dish, Drink } from "../../../orders-api/src/types";

export type OrderContextType = {
  order: Order | null;
  setOrder: (order: Order | ((prevOrder: Order | null) => Order)) => void;
};

const OrderContext = createContext<OrderContextType>({
  order: null,
  setOrder: () => {},
});

export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
