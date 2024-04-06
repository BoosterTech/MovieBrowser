import { styled } from "styled-components";

export const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 595px;
  max-height: 201px;
  padding: 0;
  margin: 24px auto auto auto;
`;

export const MessageHeader = styled.h1`
  max-width: auto;
  max-height: 44px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
  margin: 0 0 24px 0;
`;

export const MessageInfo = styled.h2`
  max-width: 426px;
  height: 58px;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  margin: 0 auto 24px auto;
`;

export const ErrorButton = styled.button`
  width: 181px;
  height: 51px;
  padding: 16px 24px;
  border-radius: 5px;
  background-color: #0044cc;
  color: white;
  margin: 0 auto;
  border: none;
`;
export const ErrorButtonText = styled.p`
  width: 133px;
  width: 133px;
  height: 19px;
  gap: 0px;
  font-family: Open sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
  margin: auto;
`;
