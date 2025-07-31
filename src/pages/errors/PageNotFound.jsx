import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
