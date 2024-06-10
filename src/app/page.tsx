"use client";
import { useOrderContext } from "@/context/OrderContext";
import PageRouter from "@/components/PageRouter";
import EmailSearch from "@/components/homeComponents/EmailSearch";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import SLIDES from "@/components/ImageCarousel/imageCarouselData";
import Dashboard from "@/components/Dashboard";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return (
    order?.email && (
      <div className="page-navigator-component">
        <PageRouter route="/makeOrder" buttonText="Next" />
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

export default function Home() {
  return (
    <div className="home-page">
      <Dashboard currentPageId={1} />
      <div className="lg:flex justify-around items-center">
        <ImageCarousel data={SLIDES} />
        <Description />
      </div>
      <EmailSearch />
      <PageNavigator />
    </div>
  );
}
