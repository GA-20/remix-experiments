import { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export const metaIndex: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const fetcher = useFetcher<{
    success: boolean;
    message: string;
  }>({
    key: "demo-fetcher",
  });

  console.log("fetcher", fetcher);

  const onFetcherSubmit = () => {
    fetcher.submit(null, {
      method: "POST",
    });
  };

  const resetFetcher = () => {
    fetcher.submit(
      {
        reset: "true",
      },
      {
        method: "post",
      }
    );
  };

  useEffect(() => {
    if (fetcher.data?.success) {
      console.log("Operation successful");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher.data]);

  useEffect(() => {
    return () => {
      resetFetcher();
    };
  }, []);

  return (
    <div>
      <h1>Fetcher State Reset on Navigation</h1>

      {fetcher.state === "submitting" && <p>Submitting...</p>}

      {fetcher.state === "idle" && <p>Idle</p>}

      {fetcher.state === "loading" && <p>Loading...</p>}

      {fetcher.data?.success && <p>{fetcher.data.message}</p>}

      {fetcher.data && !fetcher.data?.success && <p>Something went wrong</p>}

      <button onClick={onFetcherSubmit}>Submit</button>
    </div>
  );
}
