import { getPost } from "@/actions/post-actions";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./components/hero-section";
import { Article } from "./components/article";
import { RelatedArticles } from "./components/related-articles";
import { ProfileButton } from "./components/profile-button";

export default async function Page({ params }) {
  const article = await getPost(params["article-title"]);

  const heroImage = article?.sections?.[0]?.image?.[0]?.url;

  const articleContent = {
    createdAt: article?.created_at,
    author: {
      firstName: article?.author?.[0]?.firstName,
      lastName: article?.author?.[0]?.lastName,
    },
    title: article?.title,
    subtitle: article?.sections?.[2]?.content,
    bodyText: article?.sections?.[3]?.content,
  };

  return (
    <>
      <Header>
        <ProfileButton />
      </Header>
      <div className="z-30 w-full min-h-screen text-white bg-black pb-32">
        <HeroSection heroImage={heroImage} />
        <Article {...articleContent} />
        <RelatedArticles />
      </div>
      <Footer />
    </>
  );
}
