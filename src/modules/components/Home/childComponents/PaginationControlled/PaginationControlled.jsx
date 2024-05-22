import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useAuth from "../../../../auth/AuthHook/auth";
import { handleChange } from "../../../../common/Functions/functions";

export default function PaginationControlled({
  row,
  page,
  setPage,
  setLoading,
}) {
  const { state, setState } = useAuth();
  const changesFunc = async (event, value) => {
    const res = await handleChange(row, setLoading, state, setState, value);
    if (res) {
      setPage(value);
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={changesFunc} />
    </Stack>
  );
}
