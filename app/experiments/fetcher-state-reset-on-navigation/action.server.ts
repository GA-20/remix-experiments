import { ActionFunction } from "@remix-run/node";

export const actionIndex: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const reset = formData.get("reset");

  if ((reset && reset === "true") || reset === "TRUE") {
    return null;
  }

  return Response.json({
    success: true,
    message: "Action executed successfully",
  });
};
