import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
  data: {
    id: number;
    src: StaticImageData;
    alt: string;
  }[];
};

const DecrementButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 border rounded-full text-4xl font-bold p-2 shadow-lg shadow-black bg-white hover:bg-slate-400"
    >
      {"<-"}
    </button>
  );
};

const IncrementButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 justify-end border rounded-full text-4xl font-bold p-2 shadow-lg shadow-black bg-white hover:bg-slate-400"
    >
      {"->"}
    </button>
  );
};

const ImageCarousel = (slides: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const incrementIndex = () => {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < slides.data.length ? newIndex : prevIndex;
    });
  };
  const decrementIndex = () => {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : prevIndex;
    });
  };

  return (
    <div className="relative">
      <IncrementButton onClick={incrementIndex} />
      {slides.data.map(
        (slide, index) =>
          index === imageIndex && (
            <Image
              className="lg:size-1/2"
              src={slide.src}
              alt={slide.alt}
              key={index}
            ></Image>
          )
      )}
      <DecrementButton onClick={decrementIndex} />
    </div>
  );
};

export default ImageCarousel;
