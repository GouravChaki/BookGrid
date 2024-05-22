import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";

export const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #fff;
    color: #333;
    border-radius: 4px;

    & fieldset {
      border-color: #333;
    }

    &:hover fieldset {
      border-color: #333;
    }

    &.Mui-focused fieldset {
      border-color: #333;
    }
  }

  & .MuiInputLabel-root {
    color: #333;

    &.Mui-focused {
      color: #333;
    }
  }
`;

export const CustomIconButton = styled(IconButton)`
  background-color: #d32f2f;
  color: #fff;
  border-radius: 4px;
  padding: 10px;

  &:hover {
    background-color: #d32f2f;
  }
`;
