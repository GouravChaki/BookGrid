import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { handleChange } from "../functions/functions";
import useAuth from "../../../auth/AuthHook/auth";

export default function Pagination({ setLoading }) {
  const { state, setState } = useAuth();
  const [row, setRow] = useState(10);

  const changesFunc = async (event) => {
    handleChange(event, setLoading, setRow, state, setState);
  };

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rows</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={row}
          label="Page"
          onChange={changesFunc}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
          <MenuItem value={100}>Hundred</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
