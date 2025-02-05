import LoginForm from "./components/LoginForm";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        minHeight: "100dvh",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100dvh",
          bgcolor: "secondary.main",
        }}
      >
        <Image
          src="/images/login.png"
          alt="Login illustration"
          width={600}
          height={400}
          priority
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "30%" },
          paddingInline: "2rem",
          bgcolor: "secondary.dark",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100dvh",
          color: "white",
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
