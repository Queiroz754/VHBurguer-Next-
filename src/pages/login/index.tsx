import  Styles  from "./login.module.css";

// estrutura padrão
const Login = () => {
    return (
        <>
            <main id={Styles.main}>
                <img src="../imgs/hamburguer_Login.png" alt="Hambúrguer flutuando em camadas mostrando os ingredientes." />
                <div id={Styles.campo_login}>
                    <h1 className={Styles.txtTituloLogin}>Login</h1>
                    <form id={Styles.formulario}>
                        <div className={Styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required/>
                        </div>
                        <div className={Styles.campo_form}>
                            <label htmlFor="senha" className={Styles.txtLabelForms}>Senha</label>
                            <input type="password" name="senha" placeholder="***********" required/>
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