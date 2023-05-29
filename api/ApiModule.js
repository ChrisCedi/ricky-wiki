export const ApiModule = async (name, page) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=rick`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }

  console.log("response", response);
};
