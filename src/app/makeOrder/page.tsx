"use client";
import PageRouter from "@/components/PageRouter";
import DrinkSelect from "@/components/makeOrder/drinkSelect";
import DishSelect from "@/components/makeOrder/dishSelect";
import Dashboard from "@/components/dashboard";
import { useState } from "react";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  return (
    <div>
      <PageRouter route="/" buttonText="Back" />
      {confirmedChoices && <PageRouter route="/bookOrder" buttonText="Next" />}
    </div>
  );
};

const MakeOrder = () => {
  const [confirmedChoices, setConfirmedChoices] = useState(false);

  return (
    // Colours just for visual debug
    // change when designing
    <div>
      <Dashboard currentPageId={2} />
      <div className="bg-blue-500">
        <DishSelect />
      </div>
      <div className="bg-red-500">
        <DrinkSelect setConfirmedChoices={setConfirmedChoices} />
      </div>
      <PageNavigator confirmedChoices={confirmedChoices} />
    </div>
  );
};

export default MakeOrder;
