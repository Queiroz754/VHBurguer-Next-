import styles  from "./card-produto.module.css";

const CardProduto = () => {
    return(
        <article id={styles.container_card}>
            <div id={styles.inf_card}>
                <img src="../imgs/hamburguerAlcatraComBacon_1-scaled 1.png" alt="Hamburguer de alcatra com bacon" id={styles.img_card}/>
                <h3 id={styles.txt_titulo_card}>Moster</h3>
                <div>
                    <p id={styles.txt_descricao}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                </div>
                <h3 id={styles.valor}>R$ 35,00</h3>
            </div>
        </article>
    )
}

export default CardProduto;