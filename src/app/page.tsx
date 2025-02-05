'use client'

import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JobList from "./components/JobList/container";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <Header />
      <JobList />
    </>
  );
}
