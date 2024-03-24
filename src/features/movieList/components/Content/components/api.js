export const fetchMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?api_key=3b260196bc9bbb0df7bd747cf01357c0"
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { meta, data } = await response.json();

    return {
      state: "success",
      meta,
      data,
    };
  } catch {
    return {
      state: "error",
    };
  }
};
