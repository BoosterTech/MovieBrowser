import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  PageChange,
  Number,
  VectorLeft,
  VectorRight,
  Section,
  DisabledText,
  ButtonFirst,
  ButtonPrevious,
  ButtonNext,
  ButtonLast,
} from "./styled";

import {
  selectSettingLoadingValue,
  selectsettingPageNrValue,
  setFirstPage,
  setLastPage,
  setLoadingState,
  setNextPage,
  setPreviousPage,
} from "../../Redux_store/settingSlice";

const Footer = () => {
  const loadingState = useSelector(selectSettingLoadingValue);
  const page = useSelector(selectsettingPageNrValue);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (page === 500) {
      return;
    } else {
      dispatch(setNextPage());
      dispatch(setLoadingState("loading"));
    }
  };
  const handlePreviousPage = () => {
    if (page == 1) {
      return;
    } else {
      dispatch(setPreviousPage());
      dispatch(setLoadingState("loading"));
    }
  };

  const handleLastPage = () => {
    dispatch(setLastPage());
    dispatch(setLoadingState("loading"));
  };

  const handleFirstPage = () => {
    dispatch(setFirstPage());
    dispatch(setLoadingState("loading"));
  };

  return (
    loadingState !== "loading" && (
      <Wrapper>
        <Section>
          <ButtonFirst disabled={page === 1} onClick={handleFirstPage}>
            <VectorLeft />
            First
          </ButtonFirst>
          <ButtonPrevious disabled={page === 1} onClick={handlePreviousPage}>
            <VectorLeft />
            Previous
          </ButtonPrevious>
        </Section>
        <PageChange>
          <DisabledText>Page</DisabledText>
          <Number>{page}</Number>
          <DisabledText>of</DisabledText>
          <Number>500</Number>
        </PageChange>
        <Section>
          <ButtonNext disabled={page === 500} onClick={handleNextPage}>
            Next
            <VectorRight />
          </ButtonNext>
          <ButtonLast disabled={page === 500} onClick={handleLastPage}>
            Last
            <VectorRight />
          </ButtonLast>
        </Section>
      </Wrapper>
    )
  );
};

export default Footer;
