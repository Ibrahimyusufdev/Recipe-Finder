import { RecipeDetails } from '../components/RecipeDetails.jsx';
import { useParams } from 'react-router-dom';

export const RecipeDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Recipe Details for: {id}</h1>
      <RecipeDetails />
    </>
  );
};
