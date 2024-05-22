import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledSection = styled(Box)`
  padding: 24px;
  background-color: #e0e0e0;
  color: #333;
`;

export const StyledTypography = styled(Typography)`
  color: #333;
  font-family: "Segoe UI", sans-serif; /* Example of custom font */
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Adding shadow for depth */
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
