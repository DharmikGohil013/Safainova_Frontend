import Head from "next/head";
import Home from "../app/layout"; // Adjust if needed
import { isAuthenticated } from "./sign-in/auth";

export default function App() {
  return (
    <>
      <Head>
        <title>SafaiNova</title>
        <link rel="icon" href="/bugb.png" type="image/png" />
      </Head>
    </>
  );
}
