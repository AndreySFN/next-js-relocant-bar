"use client"
import {useEffect, useState} from "react";

export const useMobile = () => {
    const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth < 920);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth < 920);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return isWideScreen
}
