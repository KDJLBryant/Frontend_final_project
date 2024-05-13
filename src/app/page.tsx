"use client";
import { useOrderContext } from "@/context/newOrderContext";
import PageRouter from "@/components/PageRouter";
import EmailSearch from "@/components/home/emailSearch";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import SLIDES from "@/components/ImageCarousel/ImageCarouselData";
import Dashboard from "@/components/dashboard";

const PageNavigator = () => {
  const { order } = useOrderContext();

  return order?.email && <PageRouter route="/makeOrder" buttonText="Next" />;
};

export default function Home() {
  return (
    <div className="home-page-sm">
      <Dashboard currentPageId={1} />
      <ImageCarousel data={SLIDES} />
      <EmailSearch />
      <PageNavigator />
    </div>
  );
}
