import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { searchBooks } from "../../../../common/Functions/functions";
import useAuth from "../../../../auth/AuthHook/auth";
import { CustomIconButton, CustomTextField } from "./SearchIcon.styles";
export default function SearchIcon({
  searchQuery,
  setSearchQuery,
  row,
  setLoading,
  page,
}) {
  const { state, setState } = useAuth();

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await searchBooks(searchQuery, row, setLoading, state, setState, page);
  };

  return (
    <Box mb={2} sx={{ display: "flex", alignItems: "center" }}>
      <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <CustomTextField
          label="Search by Author"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{ mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CustomIconButton type="submit">
                  <FaSearch />
                </CustomIconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
}
