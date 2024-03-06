import NavigationMobile from "./NavigationMobile";

export default function ScrollScreenTo(id) {
    const element = document.getElementById(`${id}`);
    if(element) {
        NavigationMobile("close");
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    };
};