import React, { useState } from "react";
import useAuth from "../../auth/AuthHook/auth";
import { Box, Typography } from "@mui/material";
import Spinner from "../../common/Components/DialogLoader/Spinner";
import DashboardTable from "./childComponents/DashboardTable/DashboardTable";
import SearchIcon from "./childComponents/SearchIcon/SearchIcon";
import PaginationControlled from "./childComponents/PaginationControlled/PaginationControlled";
import NumberOfRows from "./childComponents/NumberOfRows/NumberOfRows";

export default function Home() {
  const { allBooks } = useAuth();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [row, setRow] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks =
      allBooks.filter((book) =>
          searchQuery
            ? book.author_name &&
              book.author_name.toLowerCase().includes(searchQuery.toLowerCase())
            : book
        );

  return (
    <Box component="section" sx={{ p: 3 }}>
      <Spinner open={loading} />
      <Typography variant="h4" gutterBottom>
        Books Dashboard
      </Typography>
      <SearchIcon
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        row={row}
        setLoading={setLoading}
        page={page}
      />
      <DashboardTable allBooks={filteredBooks} page={page} row={row} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
        }}
      >
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
      </Box>
    </Box>
  );
}
