import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  Container,
  Button,
  PageChange,
  Number,
  VectorLeft,
  VectorRight,
  Section,
  DisabledText,
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

  return (
    state !== "loading" && (
      <Wrapper>
        <Container>
          <Section>
            <Button disabled={page === 1} onClick={handleFirstPage}>
              <VectorLeft />
              First
            </Button>
            <Button disabled={page === 1} onClick={handlePreviousPage}>
              <VectorLeft />
              Previous
            </Button>
          </Section>
          <PageChange>
            <DisabledText>Page</DisabledText>
            <Number>{page}</Number>
            <DisabledText>of</DisabledText>
            <Number>500</Number>
          </PageChange>
          <Section>
            <Button disabled={page === 500} onClick={handleNextPage}>
              Next
              <VectorRight />
            </Button>
            <Button disabled={page === 500} onClick={handleLastPage}>
              Last
              <VectorRight />
            </Button>
          </Section>
        </Container>
      </Wrapper>
    )
  );
};
