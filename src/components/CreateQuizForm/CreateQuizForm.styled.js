import styled from "styled-components";

export const QuestionGroup = styled.div`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RemoveButton = styled.button`
  align-self: flex-end;
  height: 35px;
`;

export const AddButton = styled.button`
  display: block;
  height: 35px;
`;

export const SubmitButton = styled.button`
  height: 35px;
  margin-top: 20px;
`;

export const AnswersGroup = styled.div`
  margin-left: 50px;
`;

export const TitleAnswers = styled.div`
  margin-top: 14px;
  margin-bottom: 10px;
`;

export const ChoiceWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Error = styled.div`
  position: absolute;
  font-size: 12px;
  left: 0;
  bottom: -16px;
  color: #ff0000;
`;
