import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux_store/settingSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  return <p>MovieDetails</p>;
};

export default MovieDetails;
