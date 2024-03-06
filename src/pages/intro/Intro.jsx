import "./Intro.css";
import IntroBackground from "./IntroBackground";
import { IntroButton } from "./IntroButton";
import { IntroImage } from "./IntroImage";
import { IntroSubtitle } from "./IntroSubtitle";
import { IntroSup } from "./IntroSup";
import { IntroTitle } from "./IntroTitle";
import ScrollScreenTo from "../../functions/ScrollScreenTo";

export default function Intro() {
    return (
        <main id="intro-main">
            <IntroBackground></IntroBackground>
            <article id="intro-article">
                <div id="intro-texts-div">
                    <IntroSup>Na logística, depois do "não",</IntroSup>
                    <IntroTitle>Tudo é Assédio!</IntroTitle>
                    <div id="intro-button-div">
                        <IntroButton onClick = {() => {ScrollScreenTo('article-first')}}>Saber mais</IntroButton>
                    </div>
                </div>
                <aside id="intro-aside">
                    <IntroImage alt="Mulheres" src="/images/logo.png"></IntroImage>
                </aside>
            </article>
        </main>
    );
};