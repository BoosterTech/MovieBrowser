import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSettingPageStateValue,
  setPageState,
} from "../../Redux_store/settingSlice";

const PersonDetails = () => {
  const pageState = useSelector(selectSettingPageStateValue);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pageState != "loading") dispatch(setLoadingState("loading"));
    dispatch(setPageState("profile"));
  }, []);

  return <p> Person details page</p>;
};

export default PersonDetails;
