import { useRouteError } from "react-router-dom";

function Error() {
    const err = useRouteError();
    console.log(err)

    return(
        <>
        <h1>error occured</h1>
        <h2>oops wrong path</h2>
        <p>{err.status},{err.statusText}</p>
        <p>{err.data}</p>
        </>
    )
}

export default Error;