import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import {
  CustomTableSortLabel,
  HighlightTableCell,
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "./DashboardTable.styles";
import { CSVLink } from "react-csv";
import { convertToCSV } from "../../../../common/Functions/functions";

export default function DashboardTable({ allBooks, page, row }) {
  const [sortConfig, setSortConfig] = useState({
    key: "index",
    direction: "asc",
  });

  const sortedBooks = [...allBooks].sort((a, b) => {
    if (sortConfig.key === "index") {
      return sortConfig.direction === "asc" ? a.id - b.id : b.id - a.id;
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <StyledButton variant="contained" color="primary">
        <CSVLink
          data={convertToCSV(sortedBooks)}
          filename={"books_data.csv"}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Download CSV
        </CSVLink>
      </StyledButton>
      {allBooks.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Author name is not listed in the current data.<br/>
          Press 'Enter' to initiate a search for the author.
          <br/>Or<br/>
          It indicates that there's no further data available for the current author.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell
                  align="center"
                  onClick={() => requestSort("index")}
                >
                  Index
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "ratings_average"}
                    direction={
                      sortConfig.key === "ratings_average"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("ratings_average")}
                  >
                    Ratings Average
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "author_name"}
                    direction={
                      sortConfig.key === "author_name"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_name")}
                  >
                    Author Name
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "title"}
                    direction={
                      sortConfig.key === "title" ? sortConfig.direction : "asc"
                    }
                    onClick={() => requestSort("title")}
                  >
                    Title
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "first_publish_year"}
                    direction={
                      sortConfig.key === "first_publish_year"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("first_publish_year")}
                  >
                    First Publish Year
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "subject"}
                    direction={
                      sortConfig.key === "subject"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("subject")}
                  >
                    Subject
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "author_birth_date"}
                    direction={
                      sortConfig.key === "author_birth_date"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_birth_date")}
                  >
                    Author Birth Date
                  </CustomTableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CustomTableSortLabel
                    active={sortConfig.key === "author_top_work"}
                    direction={
                      sortConfig.key === "author_top_work"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_top_work")}
                  >
                    Author Top Work
                  </CustomTableSortLabel>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedBooks?.map((product, index) => (
                <StyledTableRow key={index}>
                  <TableCell align="center">
                    {index + 1 + (page - 1) * row}
                  </TableCell>
                  <TableCell align="center">
                    {product.ratings_average}
                  </TableCell>
                  <HighlightTableCell align="center">
                    {product.author_name}
                  </HighlightTableCell>
                  <TableCell align="center">{product.title}</TableCell>
                  <TableCell align="center">
                    {product.first_publish_year}
                  </TableCell>
                  <TableCell align="center">
                    {product &&
                    product?.subject &&
                    product?.subject?.length > 200
                      ? product.subject.substring(0, 200) + "..."
                      : product.subject}
                  </TableCell>
                  <TableCell align="center">
                    {product.author_birth_date}
                  </TableCell>
                  <TableCell align="center">
                    {product.author_top_work}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
