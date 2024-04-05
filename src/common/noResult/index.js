import NoResultSvg from "./components/NoResultSvg";
import { MessageParagraph } from "./styled";

const NoResultPage = () => {
  return (
    <>
      <MessageParagraph>
        Sorry, there are no results for "yoursearchQuery"
      </MessageParagraph>
      <NoResultSvg />
    </>
  );
};

export default NoResultPage;
