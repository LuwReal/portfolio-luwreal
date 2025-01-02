import style from './Header.module.css'

function Header(){

    let styles = {
        cursor: 'pointer',
    }
    const scrollToPage = (a) =>{
        window.scrollTo({
            top: a,
            behavior: 'smooth'
        })
    }

    return(
        <div className={style.container}>
            <nav className={style.menuNav}>
                <h1>Luwreal</h1>
                <ul>
                    <li style={styles} onClick={() =>{scrollToPage(0)}}>Inicio</li>
                    <li style={styles} onClick={() =>{scrollToPage(420)}}>Luwreal</li>
                    <li style={styles} onClick={() =>{scrollToPage(1220)}}>Skills</li>
                    <li style={styles} onClick={() =>{scrollToPage(1500)}}>Portfolio</li>
                </ul>
            </nav>
            <div className={style.projetos}>
                <div className={style.tituloProjetos}>
                    PROJETOS #1
                </div>
                <div className={style.informaçõesProjetos}>
                    <span>Mundo Felino 2</span><br/>
                    Foi Criado Para Trafeco Organico, Primeiro Projeto Oficial Produzido. Lucas Barbosa de Souza
                </div>
                <ul className={style.informaçõesProjetosList}>
                    <li>Valor Bruto de Trafeco 10mil pessoas</li>
                    <li>200 De Valor Total de Conteudo Bruto</li>
                </ul>
                <img className={style.projetosImg} src='/img/mundo-felino-2.png' alt='Logo Do Projeto Mundo Felino 2'/>
            </div>
        </div>
    )
}

export default Header