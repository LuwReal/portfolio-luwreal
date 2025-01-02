import { useState } from 'react';
import style from './Body.module.css';
import styleQuemSouEu from './BodyQuemSouEu.module.css';
import styleSkills from './BodySkills.module.css';
import styleSubProjeto from './BodySubProjeto.module.css';


function Body(){

    let [ativa, setAtiva] = useState(['0rem', '0', 'hidden'])
    let toggleFichario = () =>{
        if(ativa[0] === '0rem'){
            setAtiva(['20rem', '1', 'visible'])
        }else{
            setAtiva(['0rem', '0', 'hidden'])
        }
    }
    let styleFichario = {
        width: ativa[0],
        opacity: ativa[1],
        visibility: ativa[2],
    }

    
    return(
        <div className={style.container}>
            <div className={styleQuemSouEu.quemSouEu}>
                <div className={styleQuemSouEu.quemSouEuConteudo}>
                    <h3>Luwreal - Lucas Barbosa de Souza</h3>
                    <h2>Sobre mim</h2>
                    <p>Olá! Meu nome é Lucas Barbosa de Souza, mas no mundo da programação sou conhecido como Luwreal. Seja bem-vindo(a) ao meu portfólio! <img className={styleQuemSouEu.quemSouEuImg2} src="./img/lucas-luwreal.png" alt="Foto de Lucas Barbosa de Souza"/>
                    Sou apaixonado por aprender, construir e alcançar resultados significativos. Acredito que mesmo quando os objetivos parecem fora de alcance, é importante continuar caminhando e evoluindo.</p>
                    <h4>Hobbies</h4>
                    <ul>
                        <li>Estudar e aprender novas tecnologias.</li>
                        <li>Criar projetos criativos e inovadores.</li>
                        <li>Conhecimento: HTML, CSS, JavaScript e React</li>
                        <li>Assistir animes e passar tempo com a família.</li>
                    </ul>
                    <div className={styleQuemSouEu.objetivoEHabilidade}>
                        <div className={styleQuemSouEu.objetivoEHabilidadeConteudo}>
                            <div className={styleQuemSouEu.objetivo}>
                                <h4>Objetivos</h4>
                                <ul>
                                    <li><b>Formação Acadêmica:</b> Faculdade de Análise e Desenvolvimento de Sistemas.</li>
                                    <li><b>Idiomas:</b> Dominar Inglês e Japonês para ampliar minhas oportunidades.</li>
                                    <li><b>Tecnologias:</b> Aprimorar conhecimentos em Python, PHP, e outros.</li>
                                    <li><b>Área de Atuação:</b> Desenvolvimento Web com foco em resultados práticos e funcionais.</li>
                                </ul>
                            </div>
                            <div className={styleQuemSouEu.habilidade}>
                                <h4>Habilidades Técnicas</h4>
                                <ul>
                                    <li><b>Programação:</b> HTML, CSS, JavaScript e React</li>
                                    <li><b>Edição de Mídia:</b> Edição de vídeos e imagens para plataformas como YouTube.</li>
                                    <li><b>Redes Sociais:</b> Gestão e criação de conteúdo para diferentes plataformas.</li>
                                    <li><b>Aprendizado Contínuo:</b> Sempre em busca de novas ferramentas e frameworks para aprimorar minhas habilidades.</li>
                                </ul>
                            </div>
                            <div className={styleQuemSouEu.linksRedesSociais}>
                                 <a href="https://www.instagram.com/lucas.luwreal/" target="_blank" rel="noopener noreferrer" aria-label="Acesse o perfil do Instagram de Lucas Luwreal"><img src='/img/links/instagremLogo.jpg' alt=''/></a>
                                 <a href=" https://kwai-video.com/u/@lucas_luwreal/JCPF9elI" target="_blank" rel="noopener noreferrer" aria-label="Acesse o perfil do Kwai de Lucas Luwreal"><img src='/img/links/kwaiLogo.jpg' alt=''/></a>
                                 <a href="https://www.tiktok.com/@laremtrasformacao?_t=ZM-8sgOhsd5Yg9&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Acesse o perfil do TikTok de Lucas Luwreal"><img src='/img/links/tiktokLogo.jpg' alt=''/></a>
                                 <a href="https://youtube.com/@laremtrasformacao?si=t4FNf2b_6B0A__Us" target="_blank" rel="noopener noreferrer" aria-label="Acesse o perfil do Youtube de Lucas Luwreal"><img src='/img/links/youtubeLogo.jpg' alt=''/></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <img className={styleQuemSouEu.quemSouEuImg} src="./img/lucas-luwreal.png" alt="Foto de Lucas Barbosa de Souza"/>
            </div>
            <div className={styleSkills.skills}>
                <h3>Skills</h3>
                <table className={styleSkills.tbodyClass}>
                    <tbody>
                    <tr>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-1.jpg" alt="Logo Html" title="HTML Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-2.jpg" alt="Logo CSS" title="CSS Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-3.jpg" alt="Logo JavaScript" title="JavaScript Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-4.jpg" alt="Logo React" title="React Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-5.jpg" alt="Logo Youtube" title="Youtube Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-6.jpg" alt="Logo Redes Sociais" title="Redes Sociais Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-7.jpg" alt="Logo Editor de Video" title="Editor de Video Logo"/></td>
                        <td><img className={styleSkills.skillIMG} src="./img/skills/skill-8.jpg" alt="Logo Editor de Fotos" title="Editor de Fotos Logo"/></td>
                    </tr>
                    <tr>
                        <td style={{paddingTop: '1rem',}}>HTML: <br/>Intermediário</td>
                        <td>CSS: <br/>Intermediário</td>
                        <td>JavaScript: <br/>Iniciante</td>
                        <td>React: <br/>Iniciante</td>
                        <td>Youtube: <br/>Avançado</td>
                        <td>Redes Sociais: <br/>Iniciante</td>
                        <td>Editor de Vídeo: <br/>Avançado</td>
                        <td>Editor de foto: <br/>Iniciante</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h3 style={{textAlign: 'center', fontSize: '2rem', color: '#ddd', marginBottom: '1rem'}}>Projetos</h3>
            <div className={styleSubProjeto.subProjetos}>
            <ul>
                <li className={styleSubProjeto.subProjetos_1}>
                    <h5>20k de Visualização</h5>
                    <a className={styleSubProjeto.subProjetos_1_LinkUm} href="google.com">GitHub</a>
                    <div className={styleSubProjeto.subProjetos_1_Tecnologias}>
                        <img className={styleSubProjeto.skillIMGSubProjeto} src="./img/skills/skill-1.jpg" alt="Logo Html" title="HTML Logo"/>
                        <img className={styleSubProjeto.skillIMGSubProjeto} src="./img/skills/skill-2.jpg" alt="Logo CSS" title="CSS Logo"/>
                        <img className={styleSubProjeto.skillIMGSubProjeto} src="./img/skills/skill-3.jpg" alt="Logo JavaScript" title="JavaScript Logo"/>
                        <img className={styleSubProjeto.skillIMGSubProjeto} src="./img/skills/skill-4.jpg" alt="Logo React" title="React Logo"/>
                    </div>
                    <h3>Mundo Felino 2</h3>
                    <img className={styleSubProjeto.subProjetos_1_ImgSite} src="./img/capaMundo-Felino-2.jpg" alt=""/>
                    <div className={styleSubProjeto.subProjetos_1_WebSite}>
                        <a className={styleSubProjeto.subProjetos_1_LinkDois} href="google.com" alt="">Web Site</a>
                    </div>
                    <p className={styleSubProjeto.subProjetos_1_FicharioLink} onClick={toggleFichario}>Fichario</p>
                    <div className={styleSubProjeto.subProjetos_1_Fichario} style={styleFichario}>
                        <table className={styleSubProjeto.subProjetos_1_FicharioTabela}>
                            <tbody>
                                <tr>
                                    <td className={styleSubProjeto.subProjetos_1_FicharioTabelaTd1}>Nome do projeto:</td>
                                    <td className={styleSubProjeto.subProjetos_1_FicharioTabelaTd2}>Mundo Felino 2</td>
                                </tr>
                                <tr>
                                    <td>Tipo de <br/> projeto:</td>
                                    <td> Site - Blogs</td>
                                </tr>
                                <tr>
                                    <td>Objetivo:</td>
                                    <td>Trafeco Orgânico</td>
                                </tr>
                                <tr>
                                    <td>Papel no Projeto:</td>
                                    <td>responsável por todo o desenvolvimento</td>
                                </tr>
                                <tr>
                                    <td>Tecnologias Utilizadas:</td>
                                    <td>HTML, CSS, JavaScript e React</td>
                                </tr>
                                <tr>
                                    <td className={styleSubProjeto.subProjetos_1_FicharioTabelaTd11}>Resultados:</td>
                                    <td className={styleSubProjeto.subProjetos_1_FicharioTabelaTd12}>20k Visualização</td>
                                </tr>
                            </tbody>
                        </table>
                        <button  onClick={toggleFichario}>Volta</button>
                    </div>
                </li>
                <li style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p><b>Em Breve</b></p>
                </li>
                <li style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p><b>Em Breve</b></p>
                </li>
                <li style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p><b>Em Breve</b></p>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Body