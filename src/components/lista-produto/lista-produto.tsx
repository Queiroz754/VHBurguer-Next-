import styles from "./lista-produto.module.css"
import CardProduto from "../card-produto/card-produto"
import Link from "next/link";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificacao, toastConfirmarExclusao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";

interface Produto {
    produtoID: number,
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string,
    statusProduto: boolean
}

const ListaProduto = () => {

    const [produto, setProdutos] = useState<Produto[]>([]);

    const[ordem, setOrdem] = useState("todos");

    const[pesquisa, setPesquisa] = useState("");

    const[estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarProduto()
            setProdutos(lista)
            console.log(lista)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    async function confirmarExclusao(produtoID: number) {
        toastConfirmarExclusao(async () => {
            try {
                await excluirProduto(produtoID);
                setProdutos((listaAtual) =>
                    listaAtual.map((produto) =>
                        produto.produtoID === produtoID ? { ...produto, statusProduto: false }
                            : produto
                        )
                )

                notificacao("Produto inativado!!")
                listar();
            }
            catch (error: any) {
                erro(error.message);
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    
    const produtoFiltrados = produto.filter((produto) => 
    produto.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
    .sort((a,b) => {
        if(ordem === "menor_valor"){
            return a.preco - b.preco
        }else if(ordem === "maior_valor"){
            return b.preco - a.preco
        }
        return a.produtoID - b.produtoID
        ;
    });

    return (
        <>
            <div id={styles.botoes_home}>
                <select className={styles.botao_filtro} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                    Filtrar
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor Valor</option>
                    <option value="maior_valor">Maior Valor</option>
                </select>
                <div>
                    <label htmlFor="pesquisa">Pesquise</label>
                    <input type="text" 
                    name="pesquisa" 
                    id="" 
                    placeholder="Digite o nome do produto" 
                    value={pesquisa}
                    onChange={(e) => {setPesquisa(e.target.value)}}/>
                </div>
                {estaAutenticado &&  (
                <div id={styles.botoes_direita}>
                    <Link className={styles.botao} href="/promocoes">Promoções</Link>
                    <Link className={styles.botao} href="/produto">Adicionar produtos</Link>
                </div>)}
            </div>
            <div id={styles.cards_produtos}>
                {produtoFiltrados.length > 0 ? produtoFiltrados.map((item) => (
                    <CardProduto
                        key={item.produtoID}
                        produtoID={item.produtoID}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        img={item.imagemUrl}
                        onDelete={confirmarExclusao}
                        estaLogado={estaAutenticado}
                    />
                )) : (
                    <p>Carregando produto...</p>
                )}

            </div>
        </>
    )
}

export default ListaProduto;