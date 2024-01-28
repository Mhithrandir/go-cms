import { useLoaderData } from "react-router-dom";
function NoPage({ params }) {
    const statusText = useLoaderData();
    return (<h1>{ statusText !== undefined && statusText.message !== undefined ? statusText.message : 'Generic error' }</h1>);
}

export default NoPage;