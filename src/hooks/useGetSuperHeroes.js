import axios from "axios";
import { request } from "../utils/axois-utils";
import { useQuery } from "react-query";

const fetchHeroesFunction = () => {
  return request({ url: "/superheroes" });
};

export const useGetSuperHeroesHook = (onSuccess, onError, enable) => {
  return useQuery("super-heroes", fetchHeroesFunction, {
    onSuccess,
    onError,
    enabled: enable,
  });
};
