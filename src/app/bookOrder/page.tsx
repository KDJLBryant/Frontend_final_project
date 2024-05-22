"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import PageRouter from "@/components/PageRouter";
import Dashboard from "@/components/Dashboard";
import BookTime from "@/components/bookOrderComponents/BookTime";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  return (
    <div className="page-navigator-component">
      <PageRouter route="makeOrder" buttonText="Back" />
      {confirmedChoices && <PageRouter route="/overview" buttonText="Next" />}
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
