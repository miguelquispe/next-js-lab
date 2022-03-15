import React from "react";
import NextLink from "next/link";

export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <NextLink href="/" passHref>
          <a>Inicio</a>
        </NextLink>
      </div>
      <div>
        <NextLink href="/serverip" passHref>
          <a>Server IP</a>
        </NextLink>
      </div>
    </div>
  );
}
