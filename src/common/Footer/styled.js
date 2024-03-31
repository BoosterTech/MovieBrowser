import styled from "styled-components";
import { ReactComponent as Vector1 } from "./Vector1.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  align-items: center;
`;

export const Section = styled.div`
  margin: 0 12px;
`;

export const ButtonFirst = styled.button`
  background: ${({ theme }) => theme.color.PattensBlue};
  padding: auto;
  border: 1px solid ${({ theme }) => theme.color.PattensBlue};
  border-radius: 5px;
  text-align: center;
  margin: 3px;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.1s linear;
  width: 76px;
  height: 36px;

  &:not(:disabled):hover {
    cursor: pointer;
    font-weight: bold;
  }

  &:disabled {
    background: ${({ theme }) => theme.color.Mystic};
    color: grey;
    border: 1px solid ${({ theme }) => theme.color.Mystic};
  }
`;

export const ButtonPrevious = styled(ButtonFirst)`
  width: 106px;
  height: 36px;
`;
export const ButtonNext = styled(ButtonFirst)`
  width: 78px;
  height: 36px;
`;
export const ButtonLast = styled(ButtonFirst)`
  width: 75px;
  height: 36px;
`;

export const PageChange = styled.p`
  margin: 6px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
`;

export const DisabledText = styled.p`
  color: ${({ theme }) => theme.color.Waterloo};
  font-weight: 400;
`;

export const Number = styled.div`
  margin: auto;
  font-weight: 600;
`;

export const VectorLeft = styled(Vector1)`
  height: 10px;
  padding-right: 5px;
  color: ${({ theme }) => theme.color.Waterloo};
`;

export const VectorRight = styled(Vector1)`
  height: 10px;
  transform: rotate(180deg);
  padding-right: 5px;
  color: ${({ theme }) => theme.color.ScienceBlue};
`;
