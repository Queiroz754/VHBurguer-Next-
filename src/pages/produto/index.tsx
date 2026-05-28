import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
import { useEffect, useReducer, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto, editarProduto, listarPorId } from "../api/produtoService";
import { erro, notificacao } from "@/utils/toast";
import Toast from "@/components/toast/toast";
import { useRouter } from "next/router";
import { strict } from "assert";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { verificarAutenticacao } from "@/utils/auth";

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
    const [categoriasSelecionadas, setcategoriasSelecionadas] = useState<number[]>([]);

    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const router = useRouter();
    const id = router.query.id;


    let telaEditar = id ? true : false;


    async function listarCategoraiemProduto() {
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function carregarInformacoes() {
        if (!id) return;

        const produto = await listarPorId(Number(id))

        setNome(produto.nome);
        setDescricao(produto.descricao);
        setPreco(produto.preco);
        setcategoriasSelecionadas(produto.categoriaIds);
    }

    async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            const dados = {
                nome,
                descricao,
                preco,
                imagem,
                categoriasId: categoriasSelecionadas,
            }

            if (telaEditar) {
                await editarProduto(Number(id), dados)
                notificacao("Produto editado!")
            } else {
                await cadastrarProduto(dados)
                notificacao("Produto cadastrado!")
            }

            notificacao("Produto cadastrado com sucesso.");
        } catch (error: any) {
            erro(error.message);
        }
    }

    useEffect(() => {
        if (!verificarAutenticacao()) {
            router.push("/home")
        } else {
            setEstaAutenticado(true)
            if (!router.isReady) return;

            carregarInformacoes();

            listarCategoraiemProduto();
        }
    }, [router.isReady, id])

    if (!estaAutenticado) {
        return null;
    }

    return (
        <>
            <SubHeader />
            <Toast />
            <main id={styles.main}>
                <h1 id={styles.titulo_produto}>{telaEditar ? "Editar produto" : "Criar produto"}</h1>
                <form id={styles.form_produto} onSubmit={salvarProduto}>
                    <label htmlFor="nome">Nome do produto</label>
                    <input type="text" name="nome" placeholder="BBQ Especial"
                        value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" placeholder="Hamburgu"
                        value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    <label htmlFor="preco">Preço (R$)</label>
                    <input type="text" placeholder="40,00" name="preco"
                        value={preco} onChange={(e) => setPreco(e.target.value)} />
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria"
                        multiple
                        value={categoriasSelecionadas.map(String)}
                        onChange={(e) => setcategoriasSelecionadas(
                            Array.from(e.target.selectedOptions).map((option) => Number(option.
                                value))
                        )}>
                        {categorias.map((item) => (
                            <option value={item.categoriaID} key={item.categoriaID}>{item.nome}</option>
                        )
                        )}
                    </select>
                    <div id={styles.campo_adicionar}>
                        <a href="">Adicionar categoria</a>
                    </div>
                    <label htmlFor="url">URL da imagem</label>
                    <input type="file" name="url" id="input_img_link" className={styles.input_img}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImagem(e.target.files[0]);
                            }
                        }} />
                    <label htmlFor="input_img_link" id={styles.label_img}>https://VHburguer.com/pt-br/fotografias/cheseburg...</label>
                    <button id={styles.salvar}>Salvar</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Produto;