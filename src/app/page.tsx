export const dynamic = "force-dynamic";
import { Features } from "@/components/organizms/Features";
import { Contacts } from "@/components/organizms/Contacts";
import { FeaturesList } from "@/components/organizms/FeaturesList";
import { getData } from "@/utils/getData";
import { HeaderBanner } from "@/components/molecules";
import { LegalInformation } from "@/components/organizms";
import styled from "@/utils/styled";


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

export default async function Home() {
  const data = await getData()
  return (
    <>
      <MainContainer>
        <HeaderBanner />
        <Content>
          <FeaturesList />
          <Features response={data} />
          <Contacts />
        </Content>
        <LegalInformation />
      </MainContainer>
    </>
  );
}