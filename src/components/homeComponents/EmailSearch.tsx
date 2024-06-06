import { useOrderContext } from "@/context/OrderContext";
import { isValidEmail } from "@/utils/isValidEmail";
import { useEffect, useRef, useState } from "react";
import { Order } from "../../../../orders-api/src/types";
import { emptyOrder } from "@/utils/emptyOrder";
import api from "@/api/api";

const EmailSearch = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const { setOrder, order, setOrderFound } = useOrderContext();
  const [successMessage, setSuccessMessage] = useState("");

  const searchForEmail = async () => {
    const userInput = emailInput.current?.value;

    if (userInput && isValidEmail(userInput)) {
      const foundOrder = await api.getOrderFromEmail(userInput);

      console.log("here")
      if (foundOrder.email) {
        // Store found order
        setOrder(foundOrder);
        setOrderFound(true);
        setSuccessMessage("User found");
      } else {
        // Make new order if new email
        const newOrder: Order = {
          ...emptyOrder,
          email: userInput,
          count: 1
        };
        setOrder(newOrder)
        setSuccessMessage("Create new order");
      }
    } else {
      setSuccessMessage("Enter valid email!");
      setOrder(null);
    }
  };

  useEffect(() => {
    if (order && emailInput.current) {
      emailInput.current.value = order.email;
    }
  }, [order]);

  return (
    <div className="email-search-wrapper">
      <p className="content-card">Search for, or make new booking!</p>
      <label className="input-label" id="email">
        Enter email:
      </label>
      <div className="flex">
        <input
          className="email-input"
          id="email"
          type="text"
          placeholder="jondoe@gamil.com"
          ref={emailInput}
        />
        <button className="custom-button" onClick={searchForEmail}>
          Search
        </button>
      </div>
      {successMessage && (
        <p
          className={
            isValidEmail(emailInput.current?.value) ? "success-msg" : "warn-msg"
          }
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default EmailSearch;
