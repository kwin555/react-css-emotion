import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes `
    to  {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
    const [padding] = useState(15);
    const [time, setTime] = useState(1);
    const handleDogClick = () => {
        setTime(time * .5);
    };
  return (
        <header
            css={css`
            background-color: ${colors.dark};
            padding: ${padding}px;
            `}
        >
        <Link to="/">Adopt Me!</Link>
        <span
            css={css `
                font-size:60px;
                
                &:hover {
                    text-decoration: underline;
                    display: inline-block;
                    animation: ${time}s ${spin} linear infinite reverse;
                }
            `}
         role="img" aria-label="logo">
        🐕
        </span>
    </header>
    )
};

export default NavBar;
