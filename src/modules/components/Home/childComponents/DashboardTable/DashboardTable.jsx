import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";

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
    <>
      {allBooks.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          The current list doesn't have the author name.<br/>Click enter so that we can search the results for you!
        </Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      color: "rgba(0, 0, 0, 0.6)",
                    },
                  }}
                  onClick={() => requestSort("index")}
                >
                  Index
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "ratings_average"}
                    direction={
                      sortConfig.key === "ratings_average"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("ratings_average")}
                  >
                    Ratings Average
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "author_name"}
                    direction={
                      sortConfig.key === "author_name"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_name")}
                  >
                    Author Name
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "title"}
                    direction={
                      sortConfig.key === "title" ? sortConfig.direction : "asc"
                    }
                    onClick={() => requestSort("title")}
                  >
                    Title
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "first_publish_year"}
                    direction={
                      sortConfig.key === "first_publish_year"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("first_publish_year")}
                  >
                    First Publish Year
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "subject"}
                    direction={
                      sortConfig.key === "subject"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("subject")}
                  >
                    Subject
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "author_birth_date"}
                    direction={
                      sortConfig.key === "author_birth_date"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_birth_date")}
                  >
                    Author Birth Date
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={sortConfig.key === "author_top_work"}
                    direction={
                      sortConfig.key === "author_top_work"
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => requestSort("author_top_work")}
                  >
                    Author Top Work
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedBooks?.map((product, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {index + 1 + (page - 1) * row}
                  </TableCell>
                  <TableCell align="center">
                    {product.ratings_average}
                  </TableCell>
                  <TableCell align="center">{product.author_name}</TableCell>
                  <TableCell align="center">{product.title}</TableCell>
                  <TableCell align="center">
                    {product.first_publish_year}
                  </TableCell>
                  <TableCell align="center">
                    {product.subject.length > 200
                      ? product.subject.substring(0, 200) + "..."
                      : product.subject}
                  </TableCell>
                  <TableCell align="center">
                    {product.author_birth_date}
                  </TableCell>
                  <TableCell align="center">
                    {product.author_top_work}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
