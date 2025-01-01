import DashboardContainer from "@/components/Container/DashboardContainer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardContainer>
        {children}
      </DashboardContainer>
    </div>
  );
}
