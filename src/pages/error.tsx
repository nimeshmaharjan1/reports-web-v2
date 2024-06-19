import { useRouteError, type ErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="h-screen items-center justify-center gap-3 flex flex-col">
      <h1 className="text-4xl text-red-500">Oops!</h1>
      <p className="text-2xl text-red-400">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-600 font-bold">
        <i>{error.statusText || error.status}</i>
      </p>
    </div>
  );
}
