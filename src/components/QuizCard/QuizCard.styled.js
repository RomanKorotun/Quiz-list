import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid #dee2df;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  height: 100%;
`;

export const Name = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  /* margin-bottom: 50px; */
  font-size: 13px;
`;

export const Questions = styled.div`
  font-size: 13px;
  color: #3f75bc;
  margin-bottom: 10px;
`;

export const SubmissionsCount = styled.div`
  font-size: 13px;
  color: #3f75bc;
`;

export const OptionsButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 6px;
`;

export const OptionsList = styled.div`
  border: 1px solid #dee2df;
  padding: 13px;
  font-size: 13px;
  background-color: #e5e7e9;
  position: absolute;
  top: 40px;
  right: -20px;
`;

export const Option = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
