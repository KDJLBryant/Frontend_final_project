"use client";
import PageRouter from "@/components/PageRouter";
import DrinkSelect from "@/components/makeOrderComponents/DrinkSelect";
import DishSelect from "@/components/makeOrderComponents/DishSelect";
import Dashboard from "@/components/Dashboard";
import { useState } from "react";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  return (
    <div className="page-navigator-component">
      <PageRouter route="/" buttonText="Back" />
      {confirmedChoices && <PageRouter route="/bookOrder" buttonText="Next" />}
    </div>
  );
};

const MakeOrder = () => {
  const [confirmedChoices, setConfirmedChoices] = useState(false);

  return (
    <div>
      <Dashboard currentPageId={2} />
      <DishSelect />
      <DrinkSelect setConfirmedChoices={setConfirmedChoices} />
      <PageNavigator confirmedChoices={confirmedChoices} />
    </div>
  );
};

export default MakeOrder;
