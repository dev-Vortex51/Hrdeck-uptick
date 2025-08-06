import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <h1 className="text-8xl m-0">404</h1>
      <h2 className="my-4">Page Not Found</h2>
      <p className="mb-8 text-center text-[#718093]">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className=" btn btn-primary"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
