import axios from "axios";
import { request } from "../utils/axois-utils";
import { useQuery, useQueryClient } from "react-query";

const fetchHeroByIdFunction = (heroId) => {
  // return axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return request({ url: "/superheroes/${heroId}" });
};

export const useGetSuperHeroById = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], () => fetchHeroByIdFunction(heroId), {
    initialData: () => {
      // pass the queryKey name of the list of the heroes we display first
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
