"use client";
import { useOrderContext } from "@/context/OrderContext";
import PageRouter from "@/components/PageRouter";
import EmailSearch from "@/components/homeComponents/EmailSearch";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import SLIDES from "@/components/ImageCarousel/imageCarouselData";
import Dashboard from "@/components/Dashboard";
import { useState } from "react";

const PageNavigator = ({ confirmedChoices }: { confirmedChoices: boolean }) => {
  const { order } = useOrderContext();

  return (
    order?.email && (
      <div className="page-navigator-component">
        {confirmedChoices && <PageRouter route="/makeOrder" buttonText="Next" />}
      </div>
    )
  );
};

const Description = () => {
  return (
    <h1 className="content-card">
      Welcome to the most elagant and high-end restaraunt around at such an
      affordable price; recommended by top quality chefs such as Gordam Ramsey
      and Carlo Cracco!
    </h1>
  );
};

const Home = () => {
  const [confirmedChoices, setConfirmedChoices] = useState(false);

  return (
    <div className="home-page">
      <Dashboard currentPageId={1} />
      <div className="lg:flex justify-around items-center">
        <ImageCarousel data={SLIDES} />
        <Description />
      </div>
      <EmailSearch setConfirmedChoices={setConfirmedChoices} />
      <PageNavigator confirmedChoices={confirmedChoices} />
    </div>
  );
}

export default Home
