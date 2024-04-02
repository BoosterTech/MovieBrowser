import styled, { css } from "styled-components";

export const TopTileWrapper = styled.div`
  display: flex;
  color: black;
  background-color: #ffffff;
  max-width: 1288px;
  max-height: 644px;
  padding: 40px;
  margin: 56px auto 64px auto;
`;

export const DescriptionWrapper = styled.div`
  width: 849px;
  height: 255px;
  padding: 8px 0;
  margin: 0;
  margin-left: 40px;
`;

export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;
`;

export const ProfileName = styled.h1`
  height: 43px;
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  margin: 0 0 24px 0;
`;

export const BirthInfoContainer = styled.div`
  min-height: 52px;
  max-width: 320px;
  margin: 0 0 24px 0;
`;

export const BirthInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 8px 0;
  align-items: center;
  justify-content: flex-start;
`;

export const Paragraph = styled.p`
  margin: 0;

  ${(props) => props.grey && `color: grey;`}
  ${(props) =>
    props.biography &&
    ` font-weight:400;
      line-height:32px;
      font-size:20px;
  `}
`;
