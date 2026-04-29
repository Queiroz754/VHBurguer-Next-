import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";



interface Categoria {
    categoriaID: number,
    Nome: string
}

const Produto = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [Nome, setNome] = useState<string>("");
    const [Descricao, setDescricao] = useState<string>("");
    const [Preco, setPreco] = useState<string>("");
    const [Imagem, setImagem] = useState<File | null>(null);
    const [categoriasSelecionadas, setcategoriasSelecionadas] = useState<File | Number[]>([]);

    async function listarCategoraiemProduto(){
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            
            const dados = {
                Nome,
                Descricao,
                Preco,
                Imagem,
                categoriasId: categoriasSelecionadas
            }

            cadastrarProduto(dados);
        }catch(error: any){
        console.log(error.message);
        }
    }

    useEffect(() =>{
        listarCategoraiemProduto();
    },[])

    return (
        <>
            <body>
                <SubHeader />
                <main id={styles.main}>
                    <h1 id={styles.titulo_produto}>CRIAR PRODUTO</h1>
                    <form id={styles.form_produto}>
                        <label htmlFor="nome">Nome do produto</label>
                        <input type="text" name="nome" placeholder="BBQ Especial" id={styles.input_pequeno}
                        value={Nome} onChange={(e) => setNome(e.target.value)}/>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" name="descricao" placeholder="Hamburgu" id={styles.descricao} 
                        value={Descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        <label htmlFor="preco">Preço (R$)</label>
                        <input type="number" placeholder="40,00" name="preco" 
                        value={Preco} onChange={(e) => setPreco(e.target.value)}/>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" multiple onChange={(e) => setcategoriasSelecionadas(
                            Array.from(e.target.selectedOptions).map((option) => Number(option.
                                value))
                        )}>
                            {categorias.map((item) => (
                                <option value={item.categoriaID} key={item.categoriaID}>{item.Nome}</option>
                            )
                            )}
                        </select>
                        <label htmlFor="url">URL da imagem</label>
                        <input type="file" placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-" name="url"
                         onChange={(e) => {
                            if(e.target.files && e.target.files[0])
                            {
                                setImagem(e.target.files[0]);
                            }
                        }} />
                        <button id={styles.adicionar}>Adicionar Promoção</button>
                        <button id={styles.salvar}>Salvar</button>
                    </form>
                </main>
                <Footer />
            </body>
        </>
    )
}

export default Produto;