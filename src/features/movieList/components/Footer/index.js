import { useSelector } from "react-redux";
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
import { selectMovieStateValue } from "../../../../Redux_store/moviesSlice";

export const Footer = () => {
  const state = useSelector(selectMovieStateValue);

  return (
    state !== "loading" && (
      <Wrapper>
        <Container>
          <Section>
            <Button disabled>
              <VectorLeft />
              First
            </Button>
            <Button disabled>
              <VectorLeft />
              Previous
            </Button>
          </Section>
          <PageChange>
            <DisabledText>Page</DisabledText>
            <Number>1</Number>
            <DisabledText>of</DisabledText>
            <Number>500</Number>
          </PageChange>
          <Section>
            <Button>
              Next
              <VectorRight />
            </Button>
            <Button>
              Last
              <VectorRight />
            </Button>
          </Section>
        </Container>
      </Wrapper>
    )
  );
};
