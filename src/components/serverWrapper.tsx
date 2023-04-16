import { useEffect, useState } from "react";

const ServerLayout = ({ children }: { children: any }) => {

    const [isHydrated, setIsHydrated] = useState(false);

    //Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <>
            {isHydrated ? (<div>{children}</div>) : <div></div>}
        </>
    );
};
export default ServerLayout;