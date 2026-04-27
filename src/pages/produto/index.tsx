import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
const Produto = () => {
    return (
        <>
            <SubHeader/>
            <main>
                    <h1 id={styles.titulo_produto}>CRIAR PRODUTO</h1>
                    <form action="">
                        <label htmlFor="nome">Nome do produto</label>
                        <input type="text" name="nome" placeholder="BBQ Especial" id={styles.input_pequeno} />
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" name="descricao" placeholder="Hamburgu" id={styles.descricao} />
                        <label htmlFor="preco">Preço (R$)</label>
                        <input type="number" placeholder="40,00" name="preco" />
                        <label htmlFor="">Categoria</label>
                        <input type="text" />
                        <label htmlFor=""></label>
                        <input type="text" />
                    </form>
            </main>
            <Footer/>
        </>
    )
}

export default Produto;