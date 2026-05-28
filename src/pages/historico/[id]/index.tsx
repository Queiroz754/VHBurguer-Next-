import DataRow from "@/components/data-row/data-row";
import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./historico.module.css";
import { useEffect, useState } from "react";
import { listarPorIdProduto } from "@/pages/api/logProduto";
import { erro } from "@/utils/toast";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { verificarAutenticacao } from "@/utils/auth";

type HistoricoAlteracao = {
    logId: number;
    dataAlteracao: string;
    nomeAnterior: string;
    precoAnterior: number;
}

const Historico = () => {

    const [historico, setHistorico] = useState<HistoricoAlteracao[] | null>(null);

    const params = useParams();
    const id = params?.id;

    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const router = useRouter();

    async function listarHistorico() {
        try {
            const lista = await listarPorIdProduto(Number(id));
            setHistorico(lista);
        } catch (error: any) {
            erro(error.message);
        }
    }

    useEffect(() => {
        if (!verificarAutenticacao()) {
            router.push("/home")
        } else {
            setEstaAutenticado(true)
        }

        if (!id) return;

        setTimeout(() => {
            listarHistorico();
        }, 1000);
    }, [id]);

    if(!estaAutenticado){
        return null;
    }

    return (
        <>
            <SubHeader />
            <main>
                <section>
                    <h1 className={styles.titulo_historico}>Histórico de alterações</h1>
                    {historico === null ? (
                        <p className={styles.mensagem}>Carregando Histórico...</p>
                    ) : historico.length === 0 ? (<p className={styles.mensagem}>O produto não contém Histórico de alteração.</p>) : (
                        <table className={styles.tabela_historico}>
                            <thead>
                                <tr>
                                    <th>Data da alteração</th>
                                    <th>Nome anterior</th>
                                    <th>Preço anterior</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historico.map((item) => (
                                    <DataRow
                                        key={item.logId}
                                        dataAlteracao={item.dataAlteracao}
                                        nomeAnterior={item.nomeAnterior}
                                        precoAnterior={item.precoAnterior} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Historico;