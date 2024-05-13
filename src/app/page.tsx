"use client";
import { useOrderContext } from "@/context/newOrderContext";
import PageRouter from "@/components/PageRouter";
import EmailSearch from "@/components/home/emailSearch";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import SLIDES from "@/components/ImageCarousel/ImageCarouselData";
import Dashboard from "@/components/dashboard";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return order?.email && (<div className="page-navigator-component"><PageRouter route="/makeOrder" buttonText="Next" /></div>);
};

const Description = () => {
  return (
    <div className="bg-slate-500">
      <p className="header-card">
        Welcome to the most elagant and high-end restaraunt around at such an affordable price; recommended by top quality chefs such as Gordam Ramsey and Carlo Cracco!
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <Dashboard currentPageId={1} />
      <ImageCarousel data={SLIDES} />
      <Description />
      <EmailSearch />
      <PageNavigator />
    </div>
  );
}
