"use client";
import { Order } from "../../../../orders-api/src/types";
import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOrderContext } from "@/context/OrderContext";
import PageRouter from "@/components/PageRouter";
import Dashboard from "@/components/Dashboard";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  return (
    <div>
      <PageRouter route="makeOrder" buttonText="Back" />
      {confirmedChoices && <PageRouter route="/bookOrder" buttonText="Next" />}
    </div>
  );
};

const BookTime = ({
  setConfirmedChoices,
}: {
  setConfirmedChoices: Dispatch<SetStateAction<boolean>>;
}) => {
  const { order, setOrder } = useOrderContext();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const updatedOrder: Order = {
      ...order,
      date: date,
    };
    setOrder(updatedOrder);
    setConfirmedChoices(false);
  };

  const today = new Date();

  return (
    <div>
      <h2>Select Booking Date and Time</h2>
      <DatePicker
        className="border"
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        minDate={today}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <div className="border bg-red-500">
        <button onClick={() => setConfirmedChoices(true)}>Confirm Date</button>
      </div>
    </div>
  );
};

const BookOrder = () => {
  const [confirmedChoices, setConfirmedChoices] = useState(false);

  return (
    <div>
      <Dashboard currentPageId={3} />
      <BookTime setConfirmedChoices={setConfirmedChoices} />
      <PageNavigator confirmedChoices={confirmedChoices} />
    </div>
  );
};

export default BookOrder;
