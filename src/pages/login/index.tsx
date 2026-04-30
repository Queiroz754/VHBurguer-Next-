import React, { useState } from "react";
import Styles from "./login.module.css";
import { login } from "../api/authService";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { erro, notificacao } from "@/utils/toast";
import { Console } from "console";

// estrutura padrão
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Login bem-sucedido.")
            setTimeout(() => {
                router.push("/home");
            },2000);
        }
        catch (error: any) {
            erro("Login Inválido.")
        }
    }

    return (
        <>
            <ToastContainer />
            <main id={Styles.main}>
                <img src="../imgs/hamburguer_Login.png" 
                alt="Hambúrguer flutuando em camadas mostrando os ingredientes." />
                <div id={Styles.campo_login}>
                    <h1 className={Styles.txtTituloLogin}>Login</h1>
                    <form id={Styles.formulario} onSubmit={autenticar}>
                        <div className={Styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" 
                            required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={Styles.campo_form}>
                            <label htmlFor="senha" className={Styles.txtLabelForms}>Senha</label>
                            <input type="password" name="senha" placeholder="***********" 
                            required value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <a href="" id={Styles.esq_senha}>Esqueceu sua senha?</a>
                        <button id={Styles.fomulario_botao}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;