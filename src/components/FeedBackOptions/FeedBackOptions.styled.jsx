import styled from "@emotion/styled";

export const OptionsList = styled.ul`
 display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const Item = styled.li`
&:nth-of-type(1) {
    background-color: green;
    &:hover {
      box-shadow: 0px 0px 20px 5px green;
    }
  }
  &:nth-of-type(2) {
    background-color: orange;
    &:hover {
      box-shadow: 0px 0px 20px 5px orange;
    }
  }
  &:nth-of-type(3) {
    background-color: red;
    &:hover {
      box-shadow: 0px 0px 20px 5px red;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Option = styled.button`
display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-transform: capitalize;
`;