import axios from 'axios';
export const NewRecipe = () => {
  const getRecipe = async (food) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  getRecipe('rice');

  return <h1>MY recipe</h1>;
};
