import NoResultSvg from "./components/NoResultSvg";
import { MessageParagraph } from "./styled";

const NoResultPage = (searchQuery) => {
  return (
    <>
      <MessageParagraph>
        Sorry, there are no results for "{searchQuery}"
      </MessageParagraph>
      <NoResultSvg />
    </>
  );
};

export default NoResultPage;
