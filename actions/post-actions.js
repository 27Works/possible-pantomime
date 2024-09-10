import { notFound } from "next/navigation";

export const getPost = async (slug) => {
  const res = await fetch(
    `${process.env.BASE_URL}/posts?filter={"slug": "${slug}"}`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const article = data?.results?.[0];

  if (!article) {
    notFound();
  }

  return article;
};
