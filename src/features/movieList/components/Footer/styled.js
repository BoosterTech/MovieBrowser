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

export const SectionLeft = styled.div`
  margin: 0 12px;
  position: absolute;
  left: 36%;
  right: 45%;
`;

export const SectionRight = styled.div`
  margin: 0 12px;
  position: absolute;
  left: 54%;
  right: 30%;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.PattensBlue};
  padding: 8px 16px 8px 16px;
  border: 1px solid ${({ theme }) => theme.color.PattensBlue};
  border-radius: 5px;
  text-align: center;
  margin: 3px;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.1s linear;

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

export const PageChange = styled.p`
  margin: 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  justify-content: center;
  left: 50%;
  right: 50%;
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
