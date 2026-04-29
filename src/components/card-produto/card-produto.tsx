import styles from "./card-produto.module.css";

const CardProduto = () => {
    return (
        <article id={styles.container_card}>
            <img src="../imgs/hamburguerAlcatraComBacon_1-scaled 1.png" alt="Hamburguer de alcatra com bacon" id={styles.img_card} />
            <p id={styles.txt_titulo_card}>Monster</p>
            <div id={styles.campo_descricao}>
                <p id={styles.txt_descricao}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            </div>
            <p id={styles.valor}>R$ 35,00</p>
        </article>
    )
}

export default CardProduto;