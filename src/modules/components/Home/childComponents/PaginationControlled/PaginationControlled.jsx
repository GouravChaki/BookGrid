import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { handleChange } from "../../functions/functions";
import useAuth from "../../../../auth/AuthHook/auth";

export default function PaginationControlled({
  row,
  page,
  setPage,
  setLoading,
}) {
  const { state, setState } = useAuth();
  const changesFunc = async (event,value) => {
    await handleChange(row, setLoading, state, setState, value);
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={changesFunc} />
    </Stack>
  );
}
