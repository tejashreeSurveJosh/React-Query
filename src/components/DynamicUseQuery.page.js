import { useQueries } from "react-query";
import axios from "axios";

const fetchHeroByIdFunction = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicUseQuery = ({ heroIds }) => {
  const resultArray = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchHeroByIdFunction(heroId),
      };
    })
  );

  console.log("Resulet Dynamic", resultArray);
  return <div>Dynamic Use Query</div>;
};
