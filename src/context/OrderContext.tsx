"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Order } from "../../../orders-api/src/types";

export type OrderContextType = {
  order: Order | null;
  setOrder: (order: Order | null) => void;
  orderFound: boolean;
  setOrderFound: (arg: boolean) => void;
};

const LOCAL_STORAGE_KEY = "order";

const OrderContext = createContext<OrderContextType>({
  order: null,
  setOrder: () => { },
  orderFound: false,
  setOrderFound: () => { },
});

export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [orderFound, setOrderFound] = useState(false);

  useEffect(() => {
    const storedOrder = localStorage.getItem(LOCAL_STORAGE_KEY);
    setOrder(storedOrder ? JSON.parse(storedOrder) : null);
  }, []);

  useEffect(() => {
    if (order !== null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(order));
    }
  }, [order]);

  return (
    <OrderContext.Provider value={{ order, setOrder, orderFound, setOrderFound }}>
      {children}
    </OrderContext.Provider>
  );
};
