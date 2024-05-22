import React from "react";
import { CenteredSpinner } from "./Spinner.styles";
import FadeLoader from "react-spinners/FadeLoader";

export default function Spinner({ open }) {
  return (
    <>
      {open && (
        <CenteredSpinner>
          <FadeLoader />
        </CenteredSpinner>
      )}
    </>
  );
}
