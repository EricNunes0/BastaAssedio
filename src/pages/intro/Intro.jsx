import "./Intro.css";
import IntroBackground from "./IntroBackground";
import { IntroButton } from "./IntroButton";
import { IntroImage } from "./IntroImage";
import { IntroSubtitle } from "./IntroSubtitle";
import { IntroSup } from "./IntroSup";
import { IntroTitle } from "./IntroTitle";

export default function Intro() {
    return (
        <main id="intro-main">
            <IntroBackground></IntroBackground>
            <article id="intro-article">
                <div id="intro-texts-div">
                    <IntroSup>Texto acima do título</IntroSup>
                    <IntroTitle>Basta Assédio</IntroTitle>
                    <IntroSubtitle>Sub mensagem um pouco maior que o título</IntroSubtitle>
                    <div id="intro-button-div">
                        <IntroButton>Conhecer</IntroButton>
                    </div>
                </div>
                <aside id="intro-aside">
                    <IntroImage alt="Mulheres" src="/images/intro.png"></IntroImage>
                </aside>
            </article>
        </main>
    );
};