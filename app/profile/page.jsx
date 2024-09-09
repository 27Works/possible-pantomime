import { getDealers } from "@/actions/dealers-actions";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProfileForm } from "./components/profile-form";
import { ProfileCard } from "./components/profile-card";
import { UserNavSection } from "./components/user-nav-section";

export default async function Page() {
  const data = await getDealers();

  const dealers = await data?.results?.map((dealer) => ({
    title: dealer.title,
    id: dealer.id,
  }));

  return (
    <>
      <Header>
        <UserNavSection />
      </Header>
      <div className="z-30 w-full min-h-screen text-white bg-black pb-32">
        <div className="fixed top-10 z-0 w-full h-screen bg-[url('/images/bg_grid.jpg')]">
          <div className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-black"></div>
          <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black"></div>
          <div className="absolute left-0 w-1/4 h-full bg-gradient-to-r from-black"></div>
          <div className="absolute right-0 w-1/4 h-full bg-gradient-to-l from-black"></div>
        </div>
        <div className="relative z-10 pt-64 px-4">
          <div className="container grid grid-cols-3 w-full gap-12">
            <div className="mx-4 lg:ml-4 col-span-3 lg:col-span-1">
              <ProfileCard />
            </div>
            <div className="mx-4 lg:mr-4 col-span-3 lg:col-span-2">
              <ProfileForm dealers={dealers} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
