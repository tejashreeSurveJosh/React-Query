import axios from "axios";
import { useQuery } from "react-query";

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

export const ParallelQueries = () => {
  const { data: superHeroesData } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friendsData } = useQuery("friends", fetchFriends);
  return (
    <>
      <div>ParallelQueries Super Heroes</div>
      {superHeroesData?.data?.map((hero) => {
        return <div>{hero.name}</div>;
      })}
      <div>ParallelQueries Friends</div>
      {friendsData?.data?.map((friend) => {
        return <div>{friend.name}</div>;
      })}
    </>
  );
};
