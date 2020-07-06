import Head from "next/head";
import { useRouter } from "next/router";

const AppHead = ({ address, alternateAddress, path }) => {
  const route = useRouter().pathname;
  const pathname = process.browser ? route : path;

  let pageDescription;
  if (pathname === "/listings") {
    pageDescription = "Travel firm listings";
  } else {
    pageDescription = "Find a regulated travel insurance firm";
  }

  return (
    <Head>
      <title>Travel Adviser Directory | {pageDescription}</title>

      <link href={path} hreflang="en-GB" rel="alternate"></link>
      <link href={alternateAddress} hreflang="cy-GB" rel="alternate"></link>
      <link href={path} rel="canonical"></link>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      ></link>
    </Head>
  );
};

export default AppHead;
