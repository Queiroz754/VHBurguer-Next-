import SubHeader from "@/components/sub-header/sub-header";
import Footer from "@/components/footer/footer";
import styles from "./detalhe-produto.module.css";
import { useEffect, useState } from "react";
import { listarPorId } from "@/pages/api/produtoService";
import { useParams } from "next/navigation";
import { formatarPreco } from "@/utils/formatacao";


interface Produto {
    nome: string,
    descricao: string,
    preco: number,
    imagemUrl: string,
    categoria: string[]
}

const DetalheProduto = () => {


    const [produto, setProduto] = useState<Produto>();
    const params = useParams();
    const id = params?.id;

    async function listarProduto() {
        try {
            const response = await listarPorId(Number(id));
            setProduto(response);
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (!id) return;
        setTimeout(() => {
            listarProduto();
        }, 1000)//ms 
    }, [id])

    return (
        <>
            <SubHeader />
            <main id={styles.main}>
                <section id={`${styles.container_detalhe_produto} layout_guide`}>
                    <article id={styles.card_detalhe}>
                        {produto ? (
                            <>
                                <h1 id={styles.titulo_detalhe}>Detalhes do {produto?.nome}</h1>
                                <figure id={styles.card_detalhe_img}>
                                    <img src="/imgs/hamburguerAlcatraComBacon_1-scaled 1.png" alt="Hamburger alcatra com baicon em cima de uma  " />
                                </figure>
                                <div id={styles.info_produto}>
                                    <div id={styles.descricao}>
                                        <p className={styles.titulo}>Descrição</p>
                                        <p className={styles.conteudo}>{produto?.descricao}</p>
                                    </div>
                                    <aside id={styles.info_valor_categoria}>
                                        <div id={styles.preco}>
                                            <p className={styles.titulo}>Preço R$</p>
                                            <p className={styles.conteudo}> {formatarPreco(produto?.preco)}</p>
                                        </div>
                                        <div id={styles.categoria}>
                                            <p className={styles.titulo}>Categorias</p>
                                            <ul>
                                                {produto.categoria.map((cat) => (
                                                    <li className={styles.conteudo} key={cat} >{cat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </>
                        ) : (<p>Carregando produto...</p>)}
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DetalheProduto;