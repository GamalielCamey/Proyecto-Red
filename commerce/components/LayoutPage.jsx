import Head from "next/head";
import Header from "./Header";
import Home from "../pages/home";

const LayoutPage = ({session}) => {
    return (
        <>
            <Head>
                <title>Red Commerce</title>
            </Head>
            <Header session={session} />
            <Home />
        </>
    )
}

export default LayoutPage