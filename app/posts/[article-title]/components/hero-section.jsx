import Image from "next/image";

export const HeroSection = ({ heroImage }) => (
  <div className="relative w-full aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
    <div className="w-full min-h-[1000px] opacity-80">
      <div className="absolute w-full bg-gradient-to-b from-black z-10 h-[50%]"></div>
      <Image
        className="object-cover"
        fill
        src={heroImage}
        alt="Article image"
      />
      <div className="absolute w-full h-[50%] bottom-0 bg-gradient-to-t from-black"></div>
    </div>
  </div>
);
