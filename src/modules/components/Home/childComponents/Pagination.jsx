import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Pagination({setLoading}) {
  const [row, setRow] = React.useState(10);

  const handleChange = (event) => {
    setLoading(true);
    setRow(event.target.value);
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
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Fifty</MenuItem>
          <MenuItem value={30}>Hundred</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}