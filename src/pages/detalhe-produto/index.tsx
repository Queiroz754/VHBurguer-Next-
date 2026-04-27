import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import  styles  from "./detalhe-produto.module.css";
const DetalheProduto = () => {
    return (
        <>
            <SubHeader/>
            <main id={styles.main}>
            <section id={`${styles.container_detalhe_produto} layout_guide`}>
                <article id={styles.card_detalhe}>
                <h1 id={styles.titulo_detalhe}>Detalhes do X-Bacon</h1>
                <figure id={styles.card_detalhe_img}>
                    <img src="/imgs/hamburguerAlcatraComBacon_1-scaled 1.png" alt="Hamburger alcatra com baicon em cima de uma  " />
                </figure>
                <div id={styles.info_produto}>
                    <div id={styles.descricao}>
                        <p className={styles.titulo}>Descrição</p>
                        <p className={styles.conteudo}>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                    </div>
                    <aside id={styles.info_valor_categoria}>
                        <div id={styles.preco}>
                            <p className={styles.titulo}>Preço R$</p> 
                            <p className={styles.conteudo}> R$45,00 R$35,00</p>   
                        </div>
                        <div id={styles.categoria}>
                            <p className={styles.titulo}>Categoria</p>
                            <div>
                                <p className={styles.conteudo}>• Premium</p>
                                <p className={styles.conteudo}>• Artesanal</p>
                            </div>
                        </div>
                    </aside>
                </div>
                </article>
            </section>
            </main>
            <Footer/>
        </>
    )
}

export default DetalheProduto;