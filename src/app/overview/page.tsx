'use client'
import Dashboard from "@/components/Dashboard"
import PageRouter from "@/components/PageRouter"
import { useOrderContext } from "@/context/OrderContext"
import OrderOverview from "@/components/overviewComponents/OrderOverview";
import OrderCreator from "@/components/overviewComponents/OrderCreator";
import OrderUpdater from "@/components/overviewComponents/OrderUpdater";
import { useState } from "react";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  const { order } = useOrderContext();

  return (
    order?.email && (
      <div className="page-navigator-component">
        <PageRouter route="/bookOrder" buttonText="Back" />
        {confirmedChoices && <PageRouter route="/" buttonText="Home" />}
      </div>
    )
  );
};

const Overview = () => {
  const { orderFound } = useOrderContext()
  const [confirmedChoices, setConfirmedChoices] = useState(false);

  return (
    <div>
      <Dashboard currentPageId={4} />
      <OrderOverview />
      {orderFound ? (<OrderUpdater setConfirmedChoices={setConfirmedChoices} />) : (<OrderCreator setConfirmedChoices={setConfirmedChoices} />)}
      <PageNavigator confirmedChoices={confirmedChoices} />
    </div>
  )
}

export default Overview
