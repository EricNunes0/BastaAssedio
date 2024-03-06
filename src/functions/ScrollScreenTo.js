export default function ScrollScreenTo(id) {
    const element = document.getElementById(`${id}`);
    if(element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    };
};