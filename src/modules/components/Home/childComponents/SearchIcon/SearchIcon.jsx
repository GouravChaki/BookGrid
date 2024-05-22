import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchIcon({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted for:", searchQuery);
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
