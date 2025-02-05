'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <section>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}!</p>
    </section>
  );
}
