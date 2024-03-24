import { useEffect } from "react";
import { useState } from "react";

export const usemoviesdata = () => {
  const [moviesData, setMoviesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await Response();
      setMoviesData(data);
    };

    const timeOutId = setTimeout(fetchData, 2000); //only for test purposes. Temporary feature, will delete after tested ^V

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return moviesData;
};
