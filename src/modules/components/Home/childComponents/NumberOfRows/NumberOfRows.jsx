import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useAuth from "../../../../auth/AuthHook/auth";
import { handleChange } from "../../../../common/Functions/functions";

export default function NumberOfRows({ setLoading, row, setRow, page }) {
  const { state, setState } = useAuth();

  const changesFunc = async (event) => {
    const res = await handleChange(
      event.target.value,
      setLoading,
      state,
      setState,
      page
    );
    if (res) {
      setRow(event.target.value);
    }
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
