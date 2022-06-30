import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axois-utils";

const addNewHero = (hero) => {
  //   return axios.post("http://localhost:4000/superheroes", hero);
  return request({ url: "/superheroes", method: "post", data: hero });
};
export const useAddNewHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewHero, {
    // onSuccess: (data) => {
    //   queryClient.setQueryData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },

    // onMutate function is call before the function is fired and passed same variable which mutation function is received
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return previousHeroData;
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData(context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
