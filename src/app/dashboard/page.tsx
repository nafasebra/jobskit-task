'use client'

import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "right", fontWeight: "bold", mb: 2 }}
      >
        داشبورد کاربری
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "right" }}>
        {session?.user?.name} خوش آمدید
      </Typography>
    </>
  );
}
