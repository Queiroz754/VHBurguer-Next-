import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./criar-produto.module.css"
const CriarProduto = () => {
    return (
        <>
            <SubHeader/>
            <main id={styles.main}>
                <section id={styles.container_criar_produto}>
                    <h1 id={styles.titulo_criar}>CRIAR PRODUTO</h1>
                    <form id={styles.formulario}>
                        <label htmlFor="nome">Nome do Produto</label>
                        <input type="text" placeholder="BBQ Especial" id={styles.nome} name="nome" />
                        <label htmlFor="nome">Descrição</label>
                        <input type="text" placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada." id={styles.descricao} name="descricao" />
                        <label htmlFor="nome">Preço (R$)</label>
                        <input type="text" placeholder="40,00" id={styles.preco} name="preco" />
                        <label htmlFor="nome">Categoria</label>
                        <input type="text" placeholder="Selecione a categoria" id={styles.categoria} name="categoria" />
                        <div id={styles.adicionar}>
                            <a href="">Adicionar categoria</a>
                        </div>
                        <label htmlFor="nome">URL da imagem</label>
                        <input type="text" placeholder="Insira sua imagem" id={styles.imagem} name="imagem" />
                        <button id={styles.botao}>Salvar</button>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default CriarProduto;