import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import  styles  from "./detalhe-produto.module.css";
const DetalheProduto = () => {
    return (
        <>
            <SubHeader/>
            <main id={styles.main}>
            <section id={styles.container_detalhe_produto}>
                <h1 id="titulo_detalhe">Detalhes do X-Bacon</h1>
                <img src="" alt="" />
            </section>
            </main>
            <Footer/>
        </>
    )
}

export default DetalheProduto;