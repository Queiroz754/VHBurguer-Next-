import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ListaProduto from "@/components/lista-produto/lista-produto";
import styles from "./home.module.css";
const Home = () => {
    return(
        <>
            <Header/>
                <main id={`${styles.main} layout_guide`}>
                    <section className={styles.banner} id="banner">
                        <h1 id={styles.titulo_banner}>BEM-VINDO AO VH BURGUER</h1>
                        <img src="../imgs/foto_de_hamburgueres.png" id={styles.img_banner} alt="um hambúrguer, alface, queijo, molho especial, cebola, picles, num pão com gergelim"/>
                        <div id={styles.campo_button}>
                            <button id={styles.btn_atendente}>Chamar atendente</button>
                            <button id={styles.btn_cardapio}>Ver cardápio</button>
                        </div>
                    </section>
                    <section className={styles.destaques} id="destaques">
                        <div id={styles.container_destaques}>
                            <div id={styles.conteudo_esq}>
                                <p className={styles.txt_pequeno}>Os queridinhos da galera</p>
                                <p className={styles.txt_grande}>MAIS PEDIDOS</p>
                            </div>
                            <div id={styles.conteudo_dir}>
                                <div id={styles.bacon}>
                                    <p className={styles.txt_pequeno}>Lanches com</p>
                                    <p className={styles.txt_grande}>MUITO BACON</p>
                                </div>
                                <div id={styles.combos}>
                                    <p className={styles.txt_pequeno}>Se tiver muita fome</p>
                                    <p className={styles.txt_grande}>SUPER COMBOS</p>
                                </div>
                            </div>
                        </div>
                    </section>
                     <section className={styles.cardapio} id="cardapio">
                    <div className={`${styles.container_cardapio} layout_guide`}>
                        <h2>Cardápio</h2>
                        <ListaProduto/>
                    </div>
                </section>
                    <section className={styles.unidades} id="unidades">
                        <div className={styles.container_unidades}>
                            <p className={styles.txt_titulo_unidades}>NOSSAS UNIDADES</p>
                            <p className={styles.txt_pequeno}>• Centro – Av. Aurora, 742</p>
                            <p className={styles.txt_pequeno}>• Jardim – Av. das Palmeiras, 1280</p>
                            <p className={styles.txt_pequeno}>• Norte – Av. Horizonte, 305</p>
                            <p className={styles.txt_pequeno}>• Sul – Av. Nova Esperança, 910</p>
                        </div>   
                    </section>
                    <section></section>
                </main>
            <Footer/>
        </>
    )
}
export default Home;