import Image from "next/image";

export const Thumbnail = ({ title, subtitle, image }) => (
  <div className="col-span-1 rounded-lg bg-gradient-to-br from-[#8C8C8C] to-black hover:from-black hover:to-[#FF9900] cursor-pointer p-[1px]">
    <div className="rounded-lg bg-[#121212] overflow-hidden h-full">
      <div className="relative w-full min-h-44 aspect-w-16 aspect-h-9">
        <Image className="object-cover" fill src={image} alt="Article image" />
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#121212]"></div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <h5 className="text-lg font-futura_pt_medium tracking-tight text-white">
          {title}
        </h5>
        <p className="text-base text-[#B1B3B3]">{subtitle}</p>
      </div>
    </div>
  </div>
);
