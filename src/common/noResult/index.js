import { ContentWrapper } from "../../features/movieList/styled";
import NoResultSvg from "./components/NoResultSvg";
import { MessageParagraph } from "./styled";

const NoResultPage = (searchQuery) => {
  return (
    <ContentWrapper>
      <MessageParagraph>
        Sorry, there are no results for "{searchQuery}"
      </MessageParagraph>
      <NoResultSvg />
    </ContentWrapper>
  );
};

export default NoResultPage;
