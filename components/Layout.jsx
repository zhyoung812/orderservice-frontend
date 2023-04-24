
import NavBar from "./Navbar";
import Footer from "@/components/Footer";


const Layout = ({children}) => {

    return (
        <>
            <NavBar />
            {children}
            <Footer/>
        </>
    )
}

export default Layout;