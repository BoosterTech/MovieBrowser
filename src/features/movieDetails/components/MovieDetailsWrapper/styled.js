import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1288px;
  height: 544px;
  padding: 40px;
  margin: 64px auto;
`;

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Content = styled.div``;

export const Title = styled.div`
    font-weight: 600px;
    font-size: 36px;
    margin-bottom: 24px;
    font-weight: 600;
`;

export const Year = styled.div`
    font-size: 22px;
`;

export const NameBlock = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    margin: 24px 0;
    grid-gap: 10px;
`;

export const GreyName = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.color.StormGray};
    margin: 0;
`;

export const DescriptionName = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const DescriptionNamePro = styled.p`
    font-size: 18px;
    margin: -16px;
`;

export const Tags = styled.div`
    list-style: none;
    display:flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 24px -8px;
`;

export const Tag = styled.div`
    background: ${({ theme }) => theme.color.Mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const VotesBlock = styled.div`   
    display: grid;
    grid-template-columns: 30px 40px 30px 80px;
    align-items: center;
`;

export const ImageSvg = styled.img`
    width: 24px;
    height: 22.87px;
`;

export const VotesBlockScore = styled.div`
    font-weight: 500;
    font-size: 22px;
`;

export const VotesBlockRest = styled.div`
    font-weight: 400;
    font-size: 14px;
    height: 10px;
`;

export const Description = styled.div`
    font-size: 20px;
    margin-top: 24px;
    line-height: 1.6;
`;


