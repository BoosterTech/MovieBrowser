import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingState } from "../../Redux_store/settingSlice";
import { TopWrapper } from "./styled";

const PersonDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState("loading"));
  }, []);

  return <TopWrapper>Person details page</TopWrapper>;
};

export default PersonDetails;
