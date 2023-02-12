import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Github KPI"
        description="Github KPI is a tool to track your Github KPIs."
      />
      <Component {...pageProps} />;
    </>
  );
}
