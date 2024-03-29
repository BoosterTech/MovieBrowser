// import { apiMoviePopular } from "../../../../../common/API_URL";
// import {
//   addMovie,
//   selectMoviesPageNr,
//   updateState,
// } from "../../../../../Redux_store/moviesSlice";
// import { useDispatch, useSelector } from "react-redux";

// export const useFetchMovies = async () => {
//   const dispatch = useDispatch();
//   const pageNr = useSelector(selectMoviesPageNr);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch(`${apiMoviePopular}1`, {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw",
//           Accept: "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       const { results } = await response.json();
//       dispatch(addMovies(results));

//       dispatch(updateState("success"));
//     } catch (error) {
//       dispatch(updateState("error"));
//       console.error("Error fetching movies:", error);
//     }
//   };
// };

// // export const fetchImages = async (id) => {
// //   try {
// //     const response = await fetch(
// //       `https://api.themoviedb.org/3/movie/{id}/images`,
// //       {
// //         headers: {
// //           Authorization:
// //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI2MDE5NmJjOWJiYjBkZjdiZDc0N2NmMDEzNTdjMCIsInN1YiI6IjY2MDAwZmZjNjJmMzM1MDE2NDUxNWJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5BdMVijb7g_8sAaxu9WLzzFLGen6qB1lNYLha-96Tw",
// //           Accept: "application/json",
// //         },
// //       }
// //     );

// //     if (!response.ok) {
// //       throw new Error(response.statusText);
// //     }

// //     const { results } = await response.json();

// //     return {
// //       state: "success",
// //       imageData: results,

// //     };

// //   } catch {
// //     return {
// //       state: "error",
// //     };
// //   }
// // };
