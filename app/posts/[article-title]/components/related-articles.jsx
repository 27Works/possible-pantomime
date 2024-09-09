import React from "react";
import { Thumbnail } from "./thumbnail";

export const RelatedArticles = () => {
  const relatedArticles = require("../related-articles.json");

  return (
    <div className="container border-t border-white border-opacity-20 relative">
      <h3 className="my-5 font-futura_pt_bold text-2xl">YOU MIGHT ALSO LIKE</h3>
      <div className="flex relative">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {relatedArticles?.map((article) => (
            <Thumbnail
              title={article.title}
              subtitle={article.subtitle}
              image={article.image}
              key={article.id}
            />
          ))}
        </div>
        <div className="hidden lg:block absolute right-0 h-full w-48 bg-gradient-to-l from-black"></div>
      </div>
      <span className="hidden lg:flex absolute top-0 -end-4 z-30 items-center h-full">
        <svg
          className="w-8 h-12 cursor-pointer text-[#505050] hover:text-[#F2CB13] transition-all ease-in-out duration-300"
          viewBox="0 0 32 50"
        >
          <path
            d="M4.09187 4.40812L24.6838 25L4.09188 45.5919"
            stroke="currentColor"
            strokeWidth="10"
          />
        </svg>
      </span>
    </div>
  );
};
