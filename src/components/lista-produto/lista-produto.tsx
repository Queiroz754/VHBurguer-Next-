import styles from "./lista-produto.module.css"
import CardProduto from "../card-produto/card-produto"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const ListaProduto = () => {
    return (
        <>
            <div id={styles.container_lista}>
                <div id={styles.campo_button}>
                    <button id={styles.btn_filtrar}>Filtrar 
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                    <div>
                        <Link href="/promocoes" id={styles.btn_promocoes} >Todas as Promoções</Link>
                        <Link href="/produto" id={styles.btn_produto}>Adicionar Produtos</Link>
                    </div>
                </div>
                <div id={styles.campo_card}>
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </div>
        </>
    )
}

export default ListaProduto;