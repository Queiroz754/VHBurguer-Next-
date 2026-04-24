import Link from "next/link"
import  styles  from "./sub-header.module.css"
const SubHeader = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <img src="../imgs/Logo_footer.svg" id={styles.logo} alt="Logo do VH Burguer que contém como planno de fundo um hamburguer" />
                    <Link id={styles.voltar} href="/home#cardapio">Voltar</Link>
                </div>
            </header>
        </>
    )
}

export default SubHeader
