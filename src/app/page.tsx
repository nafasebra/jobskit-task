'use client';

import { useSession } from 'next-auth/react';
import Navbar from './_components/Navbar';
import Header from './_components/Header';
import JobList from './_components/JobList/container';

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
