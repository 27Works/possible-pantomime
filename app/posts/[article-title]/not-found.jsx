import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-futura_pt_bold">404</h1>
      <h2 className="text-3xl font-futura_pt_heavy mb-8">Page Not Found</h2>
      <p className="text-lg mb-8 font-futura_pt_medium">
        The article you are looking for does not exist
      </p>
      <Link href="/" className="button button-colored font-futura_pt_bold">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
