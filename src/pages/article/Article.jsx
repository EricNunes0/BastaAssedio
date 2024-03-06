import "./Article.css";
import { ArticleFifthImage } from "./ArticleFifthImage";
import ArticleForthLaw from "./ArticleForthLaw";
import { ArticleImage } from "./ArticleImage";
import { ArticleParagraph } from "./ArticleParagraph";
import { ArticleSecondImage } from "./ArticleSecondImage";
import { ArticleThirdImage } from "./ArticleThirdImage";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleVideo } from "./ArticleVideo";

export default function Article() {
    return (
        <article id="article">
            <div id="article-first">
                <div id="article-flex">
                    <aside id="article-left">
                        <ArticleImage alt="Pensando" src="/images/pensando.png"></ArticleImage>
                    </aside>
                    <div id="article-content">
                        <ArticleTitle>O que é assédio?</ArticleTitle>
                        <ArticleParagraph>O assédio sexual é definido como a conduta de conotação sexual praticada no exercício profissional ou em razão dele, manifestada fisicamente ou por palavras, gestos ou outros meios, proposta ou imposta à pessoa contra sua vontade, causando-lhe constrangimento e violando sua liberdade sexual.</ArticleParagraph>
                    </div>
                </div>
            </div>
            <div id="article-second">
                <div id="article-flex">
                    <div id="article-content">
                        <ArticleTitle theme="dark">Assédio moral</ArticleTitle>
                        <ArticleParagraph theme="dark">É toda conduta abusiva que, intencional e frequentemente, fira a dignidade e a integridade física ou psíquica de uma pessoa, ameaçando seu emprego ou degradando o clima de trabalho. Geralmente, tal expressão se refere a atos ocorridos durante a jornada de trabalho e no exercício de suas funções.</ArticleParagraph>
                        <div className="article-second-image-divs">
                            <ArticleSecondImage alt="Assédio moral" src="/images/moral.png"></ArticleSecondImage>
                        </div>
                    </div>
                    <div id="article-content">
                        <ArticleTitle theme="dark">Assédio sexual</ArticleTitle>
                        <ArticleParagraph theme="dark">É a abordagem indesejada pelo outro, com intenção sexual ou insistência inoportuna de alguém em posição privilegiada que usa dessa vantagem para obter favores sexuais de subalternos ou dependentes. O assédio sexual pode ocorrer em diferentes lugares, como no trabalho, em casa, na escola, na igreja etc.</ArticleParagraph>
                        <div className="article-second-image-divs">
                            <ArticleSecondImage alt="Assédio sexual" src="/images/sexual.png"></ArticleSecondImage>
                        </div>
                    </div>
                </div>
            </div>
            <div id="article-third">
                <div id="article-third-content">
                    <div id="article-flex">
                        <div id="article-content">
                            <ArticleTitle>Assédio virtual</ArticleTitle>
                            <ArticleParagraph>Caracteriza-se pelo ato de importunar, intimidar, perseguir, ofender ou hostilizar uma pessoa pela internet. São diversas as formas como o assédio virtual se mostra para a sociedade, sendo que ele engloba diversos outros tipos de discriminação.</ArticleParagraph>
                        </div>
                        <aside id="article-right">
                            <ArticleThirdImage alt="Assédio virtual" src="/images/virtual.png"></ArticleThirdImage>
                        </aside>
                    </div>
                </div>
            </div>
            <div id="article-forth">
                <div id="article-flex">
                    <aside id="article-right">
                        <ArticleForthLaw></ArticleForthLaw>
                    </aside>
                    <div id="article-content">
                        <ArticleTitle>Lei 14.612</ArticleTitle>
                        <ArticleParagraph>A Lei 14.612, de 2023 define assédio moral como conduta praticada no exercício profissional por meio da repetição de gestos, palavras faladas ou escritas ou comportamentos que exponham o estagiário, advogado ou qualquer outro profissional a situações humilhantes e constrangedoras, capazes de lhes causar ofensa à personalidade, à dignidade e à integridade psíquica ou física, visando excluí-los de suas funções ou desestabilizá-los emocionalmente.</ArticleParagraph>
                    </div>
                </div>
            </div>
            <div id="article-fifth">
                <div id="article-fifth-content">
                    <div id="article-flex">
                        <div id="article-content">
                            <ArticleTitle>Lei nº14. 540/2023</ArticleTitle>
                            <ArticleParagraph>O grande trunfo da Lei nº14. 540/2023 é seu foco na prevenção de atos contra a dignidade sexual por meio de distribuição de material informativo e implementação de verdadeiro programa educativo voltado à capacitação dos funcionários e agentes dos setores obrigados</ArticleParagraph>
                        </div>
                        <aside id="article-right">
                            <ArticleFifthImage alt="Lei nº14. 540/2023" src="/images/law-3.png"></ArticleFifthImage>
                        </aside>
                    </div>
                </div>
            </div>
            <div id="article-sixth">
                <div id="article-flex">
                    <div id="article-content">
                        <ArticleTitle theme="dark">Denuncie!</ArticleTitle>
                        <ArticleParagraph theme="dark">Dependendo da empresa em que você trabalha, podem existir canais de denúncias internas. Grandes empresas geralmente possuem um canal de denúncias específico, muitas vezes até externo, um conselho de ética ou algo do tipo. É importante que você registre os fatos nesses canais, sempre guardando comprovação do protocolo da denúncia. Além dos canais de denúncias específicos, é interessante envolver a diretoria da empresa e o setor pessoal, sempre que possível. Lembre-se apenas de sempre registrar tudo. Caso não exista uma maneira de protocolar e formalizar a denúncia, busque sempre gravar as conversas.</ArticleParagraph>
                    </div>
                    {/*<div id="article-content">
                        <ArticleTitle theme="dark">Título 7</ArticleTitle>
                        <ArticleParagraph theme="dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, nisi ac mollis efficitur, est mi dictum lorem, quis sodales arcu ligula id lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque odio erat, mollis non orci eget, blandit dapibus ex. Ut vestibulum ac enim vel malesuada. Quisque lacinia ultricies aliquam. Vestibulum nec feugiat orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sed sollicitudin dui. Donec porttitor dui eget arcu rhoncus tincidunt.</ArticleParagraph>
                    </div>*/}
                </div>
            </div>
            <div id="article-final">
                <ArticleTitle theme="dark">Entrevista:</ArticleTitle>
                <ArticleVideo src="https://www.youtube.com/embed/Y1MTYcVsBD8?si=yWjeyOUBDMFEVLfh"></ArticleVideo>
            </div>
        </article>
    );
};