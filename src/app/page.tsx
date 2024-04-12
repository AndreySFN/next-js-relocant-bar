import Image from "next/image";
import {Features} from "@/components/organizms/Features";
import {Contacts} from "@/components/organizms/Contacts";
import {FeaturesList} from "@/components/organizms/FeaturesList";
import config from '@/data/config.json'

export default async function Home() {
  return <>
    <FeaturesList />
      <Features response={config}/>
    <Contacts />
  </>
}
