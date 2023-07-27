import React, {ReactNode } from "react";

interface GlobalLayoutProps {
    children: ReactNode;
  }

const Layout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      { children }
    </>
  )
}

export default Layout
