import { useOrderContext } from "@/context/newOrderContext";
import { isValidEmail } from "@/utils/isValidEmail";
import { useEffect, useRef, useState } from "react";
import { Order } from "../../../../orders-api/src/types";
import { emptyOrder } from "@/utils/emptyOrder";
import api from "@/api/api";

const EmailSearch = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const { setOrder, order } = useOrderContext();
  const [searchMessage, setSearchMessage] = useState("");

  const searchForEmail = async () => {
    const userInput = emailInput.current?.value;

    if (userInput && isValidEmail(userInput)) {
      const foundOrder = await api.getOrderFromEmail(userInput);

      if (order?.email !== userInput) {
        if (foundOrder.email) {
          // Store found order
          setOrder(foundOrder);
          setSearchMessage("User found");
        } else {
          // Make new order if new email
          const newOrder: Order = {
            ...emptyOrder,
            email: userInput,
          };
          setOrder(newOrder);
          setSearchMessage("Create new order");
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
    <div className="email-search-component">
      <div className="flex">
        <input
          className="custom-email-input"
          type="text"
          placeholder="jondoe@gamil.com"
          ref={emailInput}
        />
        <button className="custom-search-button" onClick={searchForEmail}>
          Search
        </button>
      </div>
      {emailInput.current && !isValidEmail(emailInput.current.value) && (
        <p className="custom-warn-msg">Enter valid email</p>
      )}
      {searchMessage && <p className="custom-search-msg">{searchMessage}</p>}
    </div>
  );
};

export default EmailSearch;
