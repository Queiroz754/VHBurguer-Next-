import styles from "./lista-produto.module.css"
import CardProduto from "../card-produto/card-produto"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const ListaProduto = () => {
    return (
    <>
            <div id={styles.botoes_home}>
                <button className={styles.botao}>
                    Filtrar
                    <FontAwesomeIcon icon={faSliders} />
                </button>
                <div id={styles.botoes_direita}>
                    <Link className={styles.botao} href="/promocoes">Promoções</Link>
                    <Link className={styles.botao} href="/produto">Adicionar produtos</Link>
                </div>
            </div>
            <div id={styles.cards_produtos}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>
    </>
    )
}

export default ListaProduto;