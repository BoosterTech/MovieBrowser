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
  selectSettingSearchMaxPageNrValue,
  selectSettingSearchPageNrValue,
  selectSettingSearchValue,
  setFirstPage,
  setLastPage,
  setLoadingState,
  setNextPage,
} from "../../Redux_store/settingSlice";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Pagination = () => {
  const history = useHistory();
  const loadingState = useSelector(selectSettingLoadingValue);
  const moviesPageNr = useSelector(selectSettingMoviePageNrValue);
  const peoplePageNr = useSelector(selectSettingPeoplePageNrValue);
  const pageState = useSelector(selectSettingPageStateValue);
  const searchState = useSelector(selectSettingSearchValue);
  const page = pageState === "movies" ? moviesPageNr : peoplePageNr;
  const searchPageNr = useSelector(selectSettingSearchPageNrValue);
  const searchMaxPageNr = useSelector(selectSettingSearchMaxPageNrValue);
  const myQuery = new URLSearchParams(history.location.search).get("search");

  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (!searchState) {
      if (page === 500) {
        return;
      } else {
        dispatch(setNextPage());
        dispatch(setLoadingState("loading"));
        history.push(
          pageState === "movies"
            ? `/movies?page=${moviesPageNr + 1}`
            : `/people?page=${peoplePageNr + 1}`
        );
      }
    } else {
      if (searchPageNr === searchMaxPageNr) {
        return;
      } else {
        dispatch(setNextPage());
        dispatch(setLoadingState("loading"));
        history.push(
          pageState === "movies"
            ? `/movies?page=${searchPageNr + 1}&search=${myQuery}`
            : `/people?page=${searchPageNr + 1}&search=${myQuery}`
        );
      }
    }
  };
  const handlePreviousPage = () => {
    if (!searchState) {
      if (page === 1) {
        return;
      } else {
        dispatch(setNextPage());
        dispatch(setLoadingState("loading"));
        history.push(
          pageState === "movies"
            ? `/movies?page=${moviesPageNr - 1}`
            : `/people?page=${peoplePageNr - 1}`
        );
      }
    } else {
      if (searchPageNr === 1) {
        return;
      } else {
        dispatch(setNextPage());
        dispatch(setLoadingState("loading"));
        history.push(
          pageState === "movies"
            ? `/movies?page=${searchPageNr - 1}&search=${myQuery}`
            : `/people?page=${searchPageNr - 1}&search=${myQuery}`
        );
      }
    }
  };

  const handleLastPage = () => {
    if (!searchState) {
      dispatch(setLastPage());
      dispatch(setLoadingState("loading"));
      history.push(
        pageState === "movies" ? `/movies?page=500` : `/people?page=500`
      );
    } else {
      dispatch(setLastPage(searchMaxPageNr));
      dispatch(setLoadingState("loading"));
      history.push(
        pageState === "movies"
          ? `/movies?page=${searchMaxPageNr}&search=${myQuery}`
          : `/people?page=${searchMaxPageNr}&search=${myQuery}`
      );
    }
  };

  const handleFirstPage = () => {
    if (!searchState) {
      dispatch(setFirstPage());
      dispatch(setLoadingState("loading"));
      history.push(
        pageState === "movies" ? `/movies?page=1` : `/people?page=1`
      );
    } else {
      dispatch(setFirstPage());
      dispatch(setLoadingState("loading"));
      history.push(
        pageState === "movies"
          ? `/movies?page=1&search=${myQuery}`
          : `/people?page=1&search=${myQuery}`
      );
    }
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
  return (
    loadingState !== "loading" &&
    pageState !== "error" &&
    pageState !== "noResult" && (
      <Wrapper>
        <Section>
          <ButtonFirst
            disabled={!searchState ? page === 1 : searchPageNr === 1}
            onClick={handleFirstPage}
          >
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
          <ButtonPrevious
            disabled={!searchState ? page === 1 : searchPageNr === 1}
            onClick={handlePreviousPage}
          >
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
          <Number>{searchState ? searchPageNr : page}</Number>
          <DisabledText>of</DisabledText>
          <Number>{searchState ? searchMaxPageNr : 500}</Number>
        </PageChange>
        <Section>
          <ButtonNext
            disabled={
              !searchState ? page === 500 : searchPageNr === searchMaxPageNr
            }
            onClick={handleNextPage}
          >
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
          <ButtonLast
            disabled={
              !searchState ? page === 500 : searchPageNr === searchMaxPageNr
            }
            onClick={handleLastPage}
          >
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
