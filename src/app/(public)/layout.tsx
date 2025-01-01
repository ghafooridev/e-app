import SiteContainer from "@/components/Container/SiteContainer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteContainer>
      {children}
    </SiteContainer>
  );
}
