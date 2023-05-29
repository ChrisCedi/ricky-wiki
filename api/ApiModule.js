export const ApiModule = async (name) => {
  console.log("name", name);
  try {
    const response = await fetch(
      name.length === 0
        ? `https://rickandmortyapi.com/api/character`
        : `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }

  console.log("response", response);
};
