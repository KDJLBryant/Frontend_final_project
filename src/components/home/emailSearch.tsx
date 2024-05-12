import { useOrderContext } from "@/context/newOrderContext";
import { isValidEmail } from "@/utils/isValidEmail";
import { useEffect, useRef } from "react";
import { Order } from "../../../../orders-api/src/types";
import { emptyOrder } from "@/utils/emptyOrder";
import api from "@/api/api";

const EmailSearch = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const { setOrder, order } = useOrderContext();

  const searchForEmail = async () => {
    const userInput = emailInput.current?.value;

    if (userInput && isValidEmail(userInput)) {
      const foundOrder = await api.getOrderFromEmail(userInput);

      if (order?.email !== userInput) {
        if (foundOrder.email) {
          // Store found order
          setOrder(foundOrder);
        } else {
          // Make new order if new email
          const newOrder: Order = {
            ...emptyOrder,
            email: userInput,
          };
          setOrder(newOrder);
        }
      }
    }
  };

  useEffect(() => {
    if (order && emailInput.current) {
      emailInput.current.value = order.email;
    }
  }, [order]);

  return (
    <div>
      <input type="text" placeholder="jondoe@gamil.com" ref={emailInput} />
      <button onClick={searchForEmail}>Search</button>
      {!isValidEmail(emailInput.current?.value) && <p>Enter valid email</p>}
    </div>
  );
};

export default EmailSearch;
