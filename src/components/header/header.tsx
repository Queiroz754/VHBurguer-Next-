import Styles  from "./header.module.css";
const Header = () => {
    return(
        <>
            <header id= {Styles.header}>
                <div className={`${Styles.container} layout_guide`}>
                    <img src="../imgs/Logo_VH_Burguer.svg" id={Styles.logo} alt="Logo do VH Burguer que contém como planno de fundo um hamburguer"  />
                    <nav id={Styles.nav_menu}>
                        <a href="">Destaques</a>
                        <a href="">Cardápio</a>
                        <a href="">Unidades</a>
                        <a href="">Login</a>
                    </nav>
                    <button id={Styles.btn_icon}>
                        <img src="../imgs/icon_hamburguer.svg" alt="Ícone que representaum hamburguer para acessar o menu lateral" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;