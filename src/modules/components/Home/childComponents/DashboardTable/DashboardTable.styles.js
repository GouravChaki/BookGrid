import { Button, TableCell, TableRow, TableSortLabel } from "@mui/material";
import styled from "styled-components";

export const StyledTableCell = styled(TableCell)`
  background-color: #333;
  color: #e0e0e0;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export const StyledTableRow = styled(TableRow)`
  background-color: #f9f9f9;
  &:nth-of-type(odd) {
    background-color: #f1f1f1;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const HighlightTableCell = styled(TableCell)`
  color: #d32f2f;
  font-weight: bold;
`;

export const CustomTableSortLabel = styled(TableSortLabel)`
  &.MuiTableSortLabel-root {
    color: #e0e0e0;

    &:hover {
      color: #e0e0e0;
    }
  }

  &.MuiTableSortLabel-root.Mui-active {
    color: #e0e0e0;
  }

  & .MuiTableSortLabel-icon {
    color: #e0e0e0 !important;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #3f51b5;
  color: #fff;
  margin-bottom: 16px;
  &:hover {
    background-color: #303f9f;
  }
`;