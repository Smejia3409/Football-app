import { connectDb } from "@/lib/db";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  //to connect to database as soon the front end start running
  connectDb();
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
