import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f6fa] text-[#2f3640]">
      <h1 className="text-8xl m-0">404</h1>
      <h2 className="my-4">Page Not Found</h2>
      <p className="mb-8 text-[#718093]">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-[#4078c0] text-white font-semibold shadow hover:bg-[#305a8d] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
