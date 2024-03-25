import { useEffect, useState } from "react";
import { fetchMovies } from "./api";

export const useMoviesData = () => {
  const [moviesData, setMoviesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMoviesData(data);
      } catch (error) {
        setMoviesData({
          state: "error",
        });
      }
    };

    const timeOutId = setTimeout(fetchData, 2000); //only for test purposes. Temporary feature, will delete after tested ^V

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return moviesData;
};
