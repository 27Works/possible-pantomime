export const getDealers = async () => {
  const res = await fetch(`${process.env.BASE_URL}/dealers`, {
    method: "GET",
    headers: {
      Authorization: process.env.API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to get your dealers");
  }

  const data = await res.json();

  return data;
};
