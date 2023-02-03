
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout(){
    return (
        <>
            <div class="site-wrap">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>

    )


}