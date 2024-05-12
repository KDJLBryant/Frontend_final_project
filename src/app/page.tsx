"use client";
import { useRef } from "react";
import { useOrderContext } from "@/context/newOrderContext";
import PageRouter from "@/components/PageRouter";
import { isValidEmail } from "@/utils/isValidEmail";
import api from "@/api/api";
import { Order } from "../../../orders-api/src/types";
import { emptyOrder } from "@/utils/emptyOrder";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return order?.email && <PageRouter route="/makeOrder" buttonText="Next" />;
};

const EmailSearch = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const { setOrder } = useOrderContext();

  const searchForEmail = async () => {
    const userInput = emailInput.current?.value;

    if (userInput && isValidEmail(userInput)) {
      const foundOrder = await api.getOrderFromEmail(userInput);

      if (foundOrder.email) {
        // Store found order
        setOrder(foundOrder);
      } else {
        // Make new order
        const newOrder: Order = {
          ...emptyOrder,
          email: userInput,
        };
        setOrder(newOrder);
      }
    }
  };

  return (
    <div>
      <input type="text" placeholder="jondoe@gamil.com" ref={emailInput} />
      <button onClick={searchForEmail}>Search</button>
      {!isValidEmail(emailInput.current?.value) && <p>Enter valid email</p>}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <EmailSearch />
      <PageNavigator />
    </div>
  );
}
