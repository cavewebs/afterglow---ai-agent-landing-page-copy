/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  check: string;
}

export const Check = ({
  className,
  check = "https://c.animaapp.com/mh4off2oUskXoJ/img/check.svg",
}: Props): JSX.Element => {
  return (
    <img
      className={`absolute w-5 h-5 top-0 left-0 ${className}`}
      alt="Check"
      src={check}
    />
  );
};
