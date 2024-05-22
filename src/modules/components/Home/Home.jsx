import React, { useState } from "react";
import useAuth from "../../auth/AuthHook/auth";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Pagination from "./childComponents/Pagination";
import Spinner from "../../common/Components/DialogLoader/Spinner";
export default function Home() {
  const { allBooks } = useAuth();
  const [loading, setLoading] = useState(false);
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Spinner open={loading}/>
      <Typography variant="h4" gutterBottom>
        All the Products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Index</TableCell>
              <TableCell align="center">Ratings Average</TableCell>
              <TableCell align="center">Author Name</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">First Publish Year</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Author Birth Date</TableCell>
              <TableCell align="center">Author Top Work</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBooks.map((product, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{product.ratings_average}</TableCell>
                <TableCell align="center">{product.author_name}</TableCell>
                <TableCell align="center">{product.title}</TableCell>
                <TableCell align="center">
                  {product.first_publish_year}
                </TableCell>
                <TableCell align="center">
                  {product.subject.substring(0, 200) + "..."}
                </TableCell>
                <TableCell align="center">
                  {product.author_birth_date}
                </TableCell>
                <TableCell align="center">{product.author_top_work}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <Pagination setLoading={setLoading}/>
      </Box>
    </Box>
  );
}
