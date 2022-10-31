import SomeComponent from "../components/SomeComponent";

export function WithApp(element: React.ReactElement): React.ReactNode {
    return (
        <>
            <SomeComponent/>
            {element}
        </>
    )
}