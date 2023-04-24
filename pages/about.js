import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css"

export default function about() {
    return (
        <Layout>
            <div className={styles.container}>
            <h1> Zachary Young</h1>
                <h3> zhyoung@iu.edu</h3>
            <p> This website is a place to create manage and view orders.</p>
            </div>
        </Layout>
    )
}