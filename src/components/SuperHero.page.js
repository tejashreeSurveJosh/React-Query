import { useGetSuperHeroById } from "../hooks/useSuperHeroById";
import { useParams } from "react-router-dom";

export const SuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, isError, error, data } = useGetSuperHeroById(heroId);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
