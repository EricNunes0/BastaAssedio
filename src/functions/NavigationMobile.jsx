export default function NavigationMobile(value) {
    const menu = document.querySelector("#navigation-mobile-menu");
    function open() {
        menu.dataset.closed = "false";
    };
    function close() {
        menu.dataset.closed = "true";
    };
    if(value) {
        switch(value) {
            case "close":
                close();
                return;
        };
    };
    menu.dataset.closed === "true" ? open() : close();
};