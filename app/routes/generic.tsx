import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => [
  {
    title: "Generic Route",
    description: "This is a generic route example.",
  },
];

export const loader: LoaderFunction = async () => {
  return json({ message: "Welcome to the generic route!" });
};

export default function GenericRoute() {
  const data = useLoaderData<{ message: string }>();

  return (
    <div>
      <h1>Generic Route</h1>
      <p>{data.message}</p>
    </div>
  );
}
