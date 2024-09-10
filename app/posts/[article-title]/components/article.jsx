import Link from "next/link";
import Image from "next/image";
import ArticleAuthor from "@/public/images/article_author.jpg";

export const Article = ({
  createdAt,
  author,
  title,
  subtitle,
  bodyText,
  imageGallery,
}) => {
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const suffix = getDaySuffix(day);

  const formattedDate = `${day}${suffix} ${month}, ${year}`;

  const createSubtitle = () => ({ __html: subtitle });

  const createBodyText = () => ({ __html: bodyText });

  return (
    <article className="container grid grid-cols-12 items-center min-h-screen -mt-12 md:-mt-48 relative mb-14">
      <div className="col-span-12 col-start-1 md:col-span-10 lg:col-span-8 lg:col-start-2 xl:col-span-7 xl:col-start-3 xl:pr-10 flex flex-col gap-y-7">
        <div>
          <div className="flex items-center mb-3 space-x-1 text-sm text-[#F2CB13] font-futura_pt_light">
            <Link
              className="opacity-70 hover:opacity-100 underline underline-offset-2"
              href="/"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              className="opacity-70 hover:opacity-100 underline underline-offset-2"
              href="/news"
            >
              Latest News
            </Link>
          </div>
          <h1 className="text-6xl font-futura_pt_bold mb-2 bg-clip-text bg-gradient-to-br from-[#F2CB13] to-[#FF9900] text-transparent uppercase">
            {title}
          </h1>
          <svg
            className="w-4 h-4 my-5 stroke-[#B1B3B3] hover:stroke-[#F2CB13] stroke-1.5 stroke-linecap-round stroke-linejoin-round transition-all ease-in-out duration-300 cursor-pointer"
            viewBox="0 0 10 13"
          >
            <path d="M1.0625 2.5625C1.0625 1.73407 1.73407 1.0625 2.5625 1.0625H7.4375C8.26593 1.0625 8.9375 1.73407 8.9375 2.5625V11.9375L5 8.5625L1.0625 11.9375V2.5625Z" />
          </svg>
          <div
            className="text-white text-xl font-futura_pt_medium"
            dangerouslySetInnerHTML={createSubtitle()}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center w-full gap-3 text-white font-futura_pt_light">
            <Image
              src={ArticleAuthor}
              className="object-cover w-10 h-10 rounded-full"
              alt="article author"
            />
            <div className="flex font-futura_pt_book">
              <span>{`${author?.firstName || "John"} ${
                author?.lastName || "Snow"
              }`}</span>
              <div className="w-1 h-1 m-3 rounded-full bg-[#D9D9D9] bg-opacity-30"></div>
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className="flex items-center h-5 space-x-3 text-[#B1B3B3]">
            <span className="border border-[#B1B3B3] border-opacity-50 border-1 hover:border-[#F2CB13] transition-all ease-in-out duration-300 rounded-full cursor-pointer h-9 w-9 flex justify-center items-center">
              <svg
                className="w-4 h-4 stroke-[#B1B3B3] hover:stroke-[#F2CB13] stroke-1.5 stroke-linecap-round stroke-linejoin-round transition-all ease-in-out duration-300"
                viewBox="0 0 10 13"
              >
                <path d="M1.0625 2.5625C1.0625 1.73407 1.73407 1.0625 2.5625 1.0625H7.4375C8.26593 1.0625 8.9375 1.73407 8.9375 2.5625V11.9375L5 8.5625L1.0625 11.9375V2.5625Z" />
              </svg>
            </span>
            <span className="border border-[#B1B3B3] border-opacity-50 border-1 hover:border-[#F2CB13] hover:text-[#F2CB13] transition-all ease-in-out duration-300 rounded-full cursor-pointer h-9 w-9 flex justify-center items-center">
              <svg
                className="w-6 h-6 stroke-[#B1B3B3] hover:stroke-[#F2CB13] stroke-1.5 stroke-linecap-round stroke-linejoin-round transition-all ease-in-out duration-300"
                viewBox="0 0 18 19"
              >
                <path d="M14.4375 5.75C14.4375 6.68198 13.682 7.4375 12.75 7.4375C11.818 7.4375 11.0625 6.68198 11.0625 5.75C11.0625 4.81802 11.818 4.0625 12.75 4.0625C13.682 4.0625 14.4375 4.81802 14.4375 5.75Z" />
                <path d="M6.9375 9.5C6.9375 10.432 6.18198 11.1875 5.25 11.1875C4.31802 11.1875 3.5625 10.432 3.5625 9.5C3.5625 8.56802 4.31802 7.8125 5.25 7.8125C6.18198 7.8125 6.9375 8.56802 6.9375 9.5Z" />
                <path d="M14.4375 13.25C14.4375 14.182 13.682 14.9375 12.75 14.9375C11.818 14.9375 11.0625 14.182 11.0625 13.25C11.0625 12.318 11.818 11.5625 12.75 11.5625C13.682 11.5625 14.4375 12.318 14.4375 13.25Z" />
                <path d="M10.875 12.5L6.75 10.625" />
                <path d="M10.875 6.875L6.75 8.75" />
              </svg>
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={createBodyText()}
          className="flex flex-col gap-y-6 article"
        ></div>
        <div className="w-full relative flex flex-col gap-y-7">
          {imageGallery?.map((image) => (
            <div key={image?.id}>
              <Image
                src={image?.url}
                className="object-cover rounded-lg"
                width={800}
                height={500}
                alt="article image gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
