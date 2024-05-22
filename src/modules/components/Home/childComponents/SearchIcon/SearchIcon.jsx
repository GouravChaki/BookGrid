import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { searchBooks } from "../../../../common/Functions/functions";
import useAuth from "../../../../auth/AuthHook/auth";

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
    const res =await searchBooks(searchQuery, row, setLoading, state, setState, page);
  };
  return (
    <Box mb={2} sx={{ display: "flex", alignItems: "center" }}>
      <form onSubmit={handleSearch}>
        <TextField
          label="Search by Author"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{ mr: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#303f9f",
                    },
                    borderRadius: "4px",
                    padding: "10px",
                  }}
                >
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
}
