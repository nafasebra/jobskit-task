import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Typography fontSize={"1.5rem"} fontWeight={800} variant="h6">
        لیست جاب های ذخیره شده
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: '5rem'
        }}
      >
        <Box sx={{ height: "150px", width: "150px", position: "relative" }}>
          <Image
            src="/images/ic_content.svg"
            alt="no-context"
            fill
            style={{ width: '100%', objectFit: "contain" }}
          />
        </Box>
        <Typography fontSize={"1.2rem"} variant="body1" color="secondary.light">
          لیست بوکمارک ها خالی است
        </Typography>
      </Box>
    </>
  );
}
