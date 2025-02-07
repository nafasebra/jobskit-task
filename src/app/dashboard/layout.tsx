import DashboardContainer from "./components/DashboardContainer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardContainer>{children}</DashboardContainer>;
}
