import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetSuperHeroesHook } from "../hooks/useGetSuperHeroes";
import { useAddNewHero } from "../hooks/useAddNewHero";

export const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  // const [interval, setInterval] = useState(2000);

  const {
    mutate,
    isLoading: addLoading,
    isError: addIsError,
    error: addError,
  } = useAddNewHero();

  const handleOnSubmit = (e) => {
    const hero = { name, alterEgo };
    mutate(hero);
  };

  const onSuccess = (data) => {
    // if (data?.data.length === 4) {
    //   console.log("Data on success", data);
    //   setInterval(false);
    // }
  };

  const onError = (error) => {
    console.log("Error", error);
    setInterval("false");
  };
  const { isLoading, isError, data, error } = useGetSuperHeroesHook();
  // onSuccess,
  // onError,
  // true

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div>
        <h4>Add hero</h4>
      </div>

      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="alterEgo"
        type="text"
        placeholder="Alter Ego"
        onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button onClick={handleOnSubmit}>Add hero</button>

      <h1>RQSuperHeroes</h1>
      {data?.data.map((hero) => {
        return (
          <div>
            <Link to={`/super-hero/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};
