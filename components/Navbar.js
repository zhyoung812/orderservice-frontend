
import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
const Navbar = () => {
    return (
        <>
            <header>
                <Link href = "/">
                </Link>

                <nav className={styles.navbar}>
                    <ul  >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/orders">Orders</Link>
                        </li>
                        <li>
                            <Link href="/neworder">New Order</Link>
                        </li>
                        <li>
                            <Link href="/about"> About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar