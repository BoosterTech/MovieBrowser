export const toMovieListPage = () => "/movieListPage";
export const toPeople = () => "/people";
export const toProfile = ({ id } = { id: ":id" }) => `/people/${id}`;
export const toMovieDetails = () => "/movieDetails";
export const toSearch = () => "/searching";
export const toNoResult = () => "/noResult";
export const toError = () => "/error";

