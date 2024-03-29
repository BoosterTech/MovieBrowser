// import { useEffect, useState } from "react";
// import { useFetchMovies } from "./api";

// export const useMoviesData = () => {
//   const [moviesData, setMoviesData] = useState({
//     state: "loading",
//     data: [],
//   });

//   const fetchMovies = useFetchMovies();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { state, data } = await fetchMovies();
//         setMoviesData({ state, data });
//       } catch (error) {
//         setMoviesData({
//           state: "error",
//           data: [],
//         });
//       }
//     };

//     const timeOutId = setTimeout(fetchData, 2000); //only for test purposes. Temporary feature, will delete after tested ^V

//     return () => {
//       clearTimeout(timeOutId);
//     };
//   }, [fetchMovies]);

//   return moviesData;
// };
