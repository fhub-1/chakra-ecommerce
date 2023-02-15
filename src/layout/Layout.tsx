import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Text } from "@chakra-ui/react";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
