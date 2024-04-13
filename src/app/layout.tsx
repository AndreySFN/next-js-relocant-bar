import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import './reset.css'
import './main.css'
import {HeaderBanner} from "@/components/molecules";
import {LegalInformation} from "@/components/organizms";
import styled from "@/utils/styled";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Релокант - бар с русским акцентом",
  description: "Релокант - бар с русским акцентом",
};

const MainContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px'
})

const Content = styled.div({
  padding: '0 5%',
  width: '100%'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MainContainer>
            <HeaderBanner/>
            <Content>
              {children}
            </Content>
            <LegalInformation/>
          </MainContainer>
          
      </body>
    </html>
  );
}
