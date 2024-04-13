export const dynamic = "force-dynamic";
import { Features } from "@/components/organizms/Features";
import { Contacts } from "@/components/organizms/Contacts";
import { FeaturesList } from "@/components/organizms/FeaturesList";
import { getData } from "@/utils/getData";

// export async function fetchData() {
//   try {
//     const response = await fetch(`${process.env.BASE_URL}/api/data`, {cache: 'no-cache'});
//     return await response.json();
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     return {};
//   }
// }

export default async function Home() {
  const data = await getData()
  // const data = await fetchData();
  console.log(data)
  return (
    <>
      <FeaturesList />
      <Features response={data} />
      <Contacts />
    </>
  );
}