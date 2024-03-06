import "./Navigation.css";
import { NavigationLink } from "./NavigationLink";
import { NavigationLogo } from "./NavigationLogo";
import ScrollScreenTo from "../../functions/ScrollScreenTo";

export default function Navigation() {
    return (
        <nav id="navigation">
            <header id="navigation-header">
                <div id="navigation-right">
                    <NavigationLink onClick={() => {ScrollScreenTo('intro-main')}}>Início</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-first')}}>O que é?</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-second')}}>Moral</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-second')}}>Sexual</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-third')}}>Virtual</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-forth')}}>Leis</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-sixth')}}>Denuncie</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('article-final')}}>Entrevista</NavigationLink>
                    <NavigationLink onClick={() => {ScrollScreenTo('footer-main')}}>Créditos</NavigationLink>
                </div>
            </header>
        </nav>
    );
};