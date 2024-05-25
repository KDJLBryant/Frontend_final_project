import { Order } from "../../../../orders-api/src/types";
import { useState, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useOrderContext } from "@/context/OrderContext";

const BookTime = ({
  setConfirmedChoices
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
    setConfirmedChoices(false)
  };

  const today = new Date();

  return (
    <div className="book-time-wrapper">
      <h1 className="content-card">Select Booking Date and Time</h1>
      <DatePicker
        className="time-selector"
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        minDate={today}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export default BookTime
