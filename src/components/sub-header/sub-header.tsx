import Link from "next/link"
import styles from "./sub-header.module.css";

const Sub_Header = () => {
    return (
        <header id={styles.sub_header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer cartoonizado" id={styles.logo}/>
                <nav id={styles.nav_menu}>
                    <Link href="/home">Voltar</Link>
                </nav>
            </div>
        </header>
    )
}

export default Sub_Header;