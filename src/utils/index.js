const URL = "https://thronesapi.com/api/v2/Characters";

export const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
