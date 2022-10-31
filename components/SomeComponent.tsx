import {useEffect} from "react";

const SomeComponent = () => {
    useEffect(() => {
        console.log('Hello!');
    }, []);

    return <></>
}

export default SomeComponent