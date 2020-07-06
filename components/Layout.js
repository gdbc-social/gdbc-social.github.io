import Navbar from "./Navbar";
import Head from "next/head";

function Layout({ children, pageTitle }) {
  return (
    <div className="layout">
      <Head>
        <title>GDBC | {pageTitle}</title>
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
