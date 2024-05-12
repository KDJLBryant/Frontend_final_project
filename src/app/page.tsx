"use client";
import { useOrderContext } from "@/context/newOrderContext";
import PageRouter from "@/components/PageRouter";
import EmailSearch from "@/components/home/emailSearch";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return order?.email && <PageRouter route="/makeOrder" buttonText="Next" />;
};

export default function Home() {
  return (
    <div>
      <EmailSearch />
      <PageNavigator />
    </div>
  );
}
