import "./Navigation.css";
import { NavigationLink } from "./NavigationLink";
import { NavigationLogo } from "./NavigationLogo";
import NavigationMobile from "../../functions/NavigationMobile";
import ScrollScreenTo from "../../functions/ScrollScreenTo";
import { NavigationMobileIcon } from "./NavigationMobileIcon";

export default function Navigation() {
    return (
        <nav id="navigation">
            <main id="navigation-main">
                <div id="navigation-desktop">
                    <div id="navigation-links-div">
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
                </div>
                <div id="navigation-mobile">
                    <div id="navigation-mobile-top">
                        <NavigationMobileIcon onClick={() => {NavigationMobile()}}></NavigationMobileIcon>
                    </div>
                    <div id="navigation-mobile-menu" data-closed="true">
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
                </div>
            </main>
        </nav>
    );
};