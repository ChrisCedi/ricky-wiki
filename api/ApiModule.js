export const ApiModule = async (name, page) => {
  try {
    const response = await fetch(
      name.length === 0
        ? `https://rickandmortyapi.com/api/character?page=${page}`
        : `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
