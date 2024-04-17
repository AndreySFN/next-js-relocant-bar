import { FeatureCard } from "@/components/atoms";
import Link from "next/link";

export const MenuCard = () => <FeatureCard
    title='АССОРТИМЕНТ ЕДЫ И НАПИТКОВ'
    subtitle={
        <>
            С удовольствием порадуем вас нашими напитками и закусками<br /><br />
            <Link href='/menu'>
                СМОТРЕТЬ МЕНЮ
            </Link>
        </>
    }
    imgSrc={'/menu.jpg'}
/>
