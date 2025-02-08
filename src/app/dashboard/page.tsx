import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box sx={{paddingTop: '4rem'}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", gap: "1rem" },
        }}
      >
        <Card
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "secondary.main",
            color: "white",
            padding: "2rem",
          }}
        >
          <Stack sx={{ width: "100%", flexBasis: "80%" }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              تعداد شغل‌های ریلوکیشن و ویزااسپانسرشیپ امروز
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              ۳۴۱
            </Typography>
          </Stack>
          <Box
            sx={{
              width: "100%",
              flexBasis: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/relocation-jobs.svg"
              alt="first"
              width={1000}
              height={0}
              style={{
                width: "100px",
                height: "auto",
              }}
            />
          </Box>
        </Card>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "secondary.main",
            color: "white",
            padding: "2rem",
          }}
        >
          <Stack sx={{ width: "100%", flexBasis: "80%" }}>
            <Typography
              variant="body1"
              sx={{ textAlign: "right", fontWeight: "bold", mb: 2 }}
            >
              تعداد شغل‌های ریلوکیشن و ویزااسپانسرشیپ امروز
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: "right", fontWeight: "bold", fontSize: "2rem" }}
            >
              ۳۴۱
            </Typography>
          </Stack>
          <Box sx={{ width: "100%", flexBasis: "20%" }}>
            <Image
              src="/images/job-logo.svg"
              alt="first"
              width={1000}
              height={0}
              style={{
                width: "100px",
                height: "auto",
              }}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
