export const url = "https://am-backend-henna.vercel.app";

export const getArgumentData = async ({ params = "" }) => {
  const response = await fetch(`${url}/${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result: { data: any } = await response.json();
  return result;
};
