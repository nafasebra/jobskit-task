import DashboardContainer from "./_components/DashboardContainer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardContainer>{children}</DashboardContainer>;
}
