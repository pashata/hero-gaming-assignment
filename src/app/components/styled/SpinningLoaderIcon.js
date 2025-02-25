import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core'
import {css, keyframes} from "@emotion/react";
import {FiLoader} from "react-icons/fi";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default function SpinningLoaderIcon() {
    return <FiLoader css={css`animation: ${spinAnimation} 1s linear infinite;`} />
}