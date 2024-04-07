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
  selectSettingMoviePageNrValue,
  selectSettingPageStateValue,
  selectSettingPeoplePageNrValue,
  setFirstPage,
  setLastPage,
  setLoadingState,
  setNextPage,
  setPreviousPage,
} from "../../Redux_store/settingSlice";
import { useEffect, useState } from "react";

const Pagination = () => {
  const loadingState = useSelector(selectSettingLoadingValue);
  const moviesPageNr = useSelector(selectSettingMoviePageNrValue);
  const peoplePageNr = useSelector(selectSettingPeoplePageNrValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const page = pageState === "movies" ? moviesPageNr : peoplePageNr;

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
    if (page === 1) {
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // [window.innerWidth]
  return (
    loadingState !== "loading" && (
      <Wrapper>
        <Section>
          <ButtonFirst disabled={page === 1} onClick={handleFirstPage}>
            {windowWidth >= 767 ? (
              <>
                <VectorLeft />
                First
              </>
            ) : (
              <>
                <VectorLeft />
                <VectorLeft />
              </>
            )}
          </ButtonFirst>
          <ButtonPrevious disabled={page === 1} onClick={handlePreviousPage}>
            {windowWidth >= 767 ? (
              <>
                <VectorLeft />
                Previous
              </>
            ) : (
              <>
                <VectorLeft />
              </>
            )}
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
            {windowWidth >= 767 ? (
              <>
                Next
                <VectorRight />
              </>
            ) : (
              <>
                <VectorRight />
              </>
            )}
          </ButtonNext>
          <ButtonLast disabled={page === 500} onClick={handleLastPage}>
            {windowWidth >= 767 ? (
              <>
                Last
                <VectorRight />
              </>
            ) : (
              <>
                <VectorRight />
                <VectorRight />
              </>
            )}
          </ButtonLast>
        </Section>
      </Wrapper>
    )
  );
};

export default Pagination;
