import Footer from "@/components/footer/footer"
import Sub_Header from "@/components/sub-header/sub-header"
import styles from './categoria.module.css'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { cadastrarCategoria } from '../api/categoriaService';
import { ToastContainer, toast } from 'react-toastify';
import { Router, useRouter } from "next/router"
import { verificarAutenticacao } from "@/utils/auth"

const Categoria = () => {

    const [categoria, setCategoria]  = useState<string>("");
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const router = useRouter();


    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await cadastrarCategoria(categoria);
            notificacao("Cadastro realizado com sucesso.");
        }
        catch(error: any){
            erro(error.message);
        }
    }

    useEffect(() => {
        if(!verificarAutenticacao()){
            router.push("/home")
        }else{
            setEstaAutenticado(true)
        }
    
    }, [])

    if(!estaAutenticado){
        return null;
    }


    return(
        <>
            <ToastContainer/>
            <Sub_Header/>
                <main id={styles.main}>
                    <h1>CRIAR CATEGORIA</h1>
                    <form action="" id={styles.formulario} onSubmit={cadastrar}>
                        <div id={styles.campo_formulario}>
                            <label htmlFor="">Nome Categoria</label>
                            <input type="text" placeholder="Digite a categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                        </div>
                        <div id={styles.alinharBotoes}>
                            <button id={styles.botaoSalvar} type="submit">Salvar</button>
                        </div>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Categoria