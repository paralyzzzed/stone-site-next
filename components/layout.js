import Navbar from './App/Navbar'
import Footer from './App/Footer'
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}