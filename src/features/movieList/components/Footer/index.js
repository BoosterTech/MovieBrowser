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
  nextPage,
  previousPage,
  selectMovieStateValue,
  selectMoviesPageNr,
  setFirstPage,
  setLastPage,
  updateState,
} from "../../../../Redux_store/moviesSlice";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const state = useSelector(selectMovieStateValue);
  const page = useSelector(selectMoviesPageNr);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (page === 500) {
      return;
    } else {
      dispatch(nextPage());
      dispatch(updateState("loading"));
    }
  };
  const handlePreviousPage = () => {
    if (page == 1) {
      return;
    } else {
      dispatch(previousPage());
      dispatch(updateState("loading"));
    }
  };

  const handleLastPage = () => {
    dispatch(setLastPage());
    dispatch(updateState("loading"));
  };

  const handleFirstPage = () => {
    dispatch(setFirstPage());
    dispatch(updateState("loading"));
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
    state !== "loading" && (
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
