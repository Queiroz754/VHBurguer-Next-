import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";
import { erro, notificacao } from "@/utils/toast";
import Toast from "@/components/toast/toast";

interface Categoria {
    categoriaID: number,
    nome: string
}

const Produto = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [categoriasSelecionado, setcategoriasSelecionadas] = useState<number[]>([]);

    async function listarCategoraiemProduto() {
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            const dados = {
                nome,
                descricao,
                preco,
                imagem,
                categoriasId: categoriasSelecionado
            }

            await cadastrarProduto(dados);
            notificacao("Produto cadastrado com sucesso.");
        } catch (error: any) {
            erro(error.message);
        }
    }

    useEffect(() => {
        listarCategoraiemProduto();
    }, [])

    return (
        <>
            <SubHeader />
            <Toast />
            <main id={styles.main}>
                <h1 id={styles.titulo_produto}>CRIAR PRODUTO</h1>
                <form id={styles.form_produto} onSubmit={Cadastrar}>
                    <label htmlFor="nome">Nome do produto</label>
                    <input type="text" name="nome" placeholder="BBQ Especial" id={styles.input_pequeno}
                        value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" placeholder="Hamburgu" id={styles.descricao}
                        value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    <label htmlFor="preco">Preço (R$)</label>
                    <input type="text" placeholder="40,00" name="preco"
                        value={preco} onChange={(e) => setPreco(e.target.value)} />
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" multiple onChange={(e) => setcategoriasSelecionadas(
                        Array.from(e.target.selectedOptions).map((option) => Number(option.
                            value))
                    )}>
                        {categorias.map((item) => (
                            <option value={item.categoriaID} key={item.categoriaID}>{item.nome}</option>
                        )
                        )}
                    </select>
                    <label htmlFor="url">URL da imagem</label>
                    <input type="file" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-" name="url"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImagem(e.target.files[0]);
                            }
                        }} />
                    <button id={styles.adicionar}>Adicionar Promoção</button>
                    <button id={styles.salvar}>Salvar</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Produto;