import styles from "./lista-produto.modules.css"
import CardProduto from "../card-produto/card-produto"

const ListaProduto = () => {
    return(
        <>
            <div>
                <button>Filtrar</button>
                <div>
                    <button>Todas as promoções</button>
                    <button>Todos os produtos</button>
                </div>
            </div>
            <CardProduto/>
        </>
    )
}

export default ListaProduto;