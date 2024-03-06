import ScrollScreenTo from "../../functions/ScrollScreenTo";
import "./Footer.css";
import { FooterAluno } from "./FooterAluno";
import { FooterLink } from "./FooterLink";
import { FooterTitle } from "./FooterTitle";

export default function Footer() {
    return (
        <footer id="footer-main">
            <article id="footer-article">
                <div id="footer-credits">
                    <FooterTitle>Alunos:</FooterTitle>
                    <FooterAluno>Alaira</FooterAluno>
                    <FooterAluno>Eric Nunes</FooterAluno>
                    <FooterAluno>Camile</FooterAluno>
                    <FooterAluno>Carlos</FooterAluno>
                    <FooterAluno>Karine</FooterAluno>
                    <FooterAluno>Maria Eduarda</FooterAluno>
                    <FooterAluno>Willian</FooterAluno>
                </div>
            </article>
        </footer>
    );
};