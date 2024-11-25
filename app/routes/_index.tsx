import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import Index, {
  metaIndex,
} from "~/experiments/fetcher-state-reset-on-navigation";
import { actionIndex } from "~/experiments/fetcher-state-reset-on-navigation/action.server";
import { loaderIndex } from "~/experiments/fetcher-state-reset-on-navigation/loader.server";

export const meta: MetaFunction = metaIndex;
export const loader: LoaderFunction = loaderIndex;
export const action: ActionFunction = actionIndex;

export default function IndexRoute() {
  return <Index />;
}
