import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import Toast from "@/components/toast/toast";
import styles from "./promocoes.module.css"

const Promocoes = () => {
    return (
        <>
            <SubHeader />
            <Toast />
            <main id={styles.main}>
                <section id={`${styles.container_promocoes} layout_guide`}>
                    <div id={styles.campo_promocoes}>
                        <p id={styles.titulo_promocoes}>Todas as promoções</p>
                        <button>Criar promoção</button>
                    </div>
                    <div id={styles.legenda}>
                        <div>
                            <p>Nome</p>
                            <p>Data de expiração</p>
                            <p>Editar</p>
                            <span></span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Promocoes;