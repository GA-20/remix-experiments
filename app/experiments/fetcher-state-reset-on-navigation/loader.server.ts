import { LoaderFunction } from "@remix-run/node";

export const loaderIndex: LoaderFunction = async ({ request }) => {
  console.log("loaderIndex", request);
  return Response.json({
    success: true,
  });
};
