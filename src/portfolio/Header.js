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
                    Blogs com 16 páginas, básico, responsivo, parte de um projeto beta Mundo Felino 2.
                </div>
                <ul className={style.informaçõesProjetosList}>
                    <li>Lançamento 04/01/25</li>
                    <li>Conteúdo Escrito e Digitado</li>
                </ul>
                <img className={style.projetosImg} src='/img/mundo-felino-2.png' alt='Logo Do Projeto Mundo Felino 2'/>
            </div>
        </div>
    )
}

export default Header