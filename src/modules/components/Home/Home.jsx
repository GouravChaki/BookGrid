import React, { useState } from "react";
import useAuth from "../../auth/AuthHook/auth";
import { Box } from "@mui/material";
import Spinner from "../../common/Components/DialogLoader/Spinner";
import DashboardTable from "./childComponents/DashboardTable/DashboardTable";
import SearchIcon from "./childComponents/SearchIcon/SearchIcon";
import PaginationControlled from "./childComponents/PaginationControlled/PaginationControlled";
import NumberOfRows from "./childComponents/NumberOfRows/NumberOfRows";
import { StyledBox, StyledSection, StyledTypography } from "./Home.styles";

export default function Home() {
  const { allBooks } = useAuth();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const normalizeString = (str) => str.replace(/[\s.]+/g, "").toLowerCase();

  const filteredBooks = allBooks.filter((book) =>
    searchQuery
      ? book.author_name &&
        normalizeString(book.author_name).includes(normalizeString(searchQuery))
      : book
  );

  return (
    <StyledSection component="section">
      <Spinner open={loading} />
      <StyledTypography variant="h4" gutterBottom>
        📕 BookGrid Dashboard 📖
      </StyledTypography>
      <SearchIcon
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        row={row}
        setLoading={setLoading}
        page={page}
      />
      <DashboardTable allBooks={filteredBooks} page={page} row={row} />
      <StyledBox>
        <Box></Box>
        <Box>
          <PaginationControlled
            row={row}
            page={page}
            setPage={setPage}
            setLoading={setLoading}
          />
        </Box>
        <Box>
          <NumberOfRows
            setLoading={setLoading}
            row={row}
            setRow={setRow}
            page={page}
          />
        </Box>
      </StyledBox>
    </StyledSection>
  );
}
