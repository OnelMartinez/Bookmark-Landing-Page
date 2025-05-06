const icon_menu = document.getElementById('icon-menu');
const imagen_main = document.getElementById('img-main');
const menu = document.getElementById('menus');
const close = document.getElementById('close-icon');

icon_menu.addEventListener('click', function( ) {
    menu.classList.remove('cerrado');
    imagen_main.style.position = 'relative';
    menu.classList.add('menu');
}, false)

close.addEventListener('click', function( ) {
    menu.classList.remove('menu')
    menu.classList.add('cerrado');
    imagen_main.style.position = 'absolute';
    
}, false)

// FEATURES SECCION
const opc_one = document.getElementById('opc-one');
opc_one.style.borderBottom = '3px solid hsl(231, 69%, 60%)';

const opc_two = document.getElementById('opc-two');
const opc_tree = document.getElementById('opc-tree');
const container = document.getElementById('seccion-container');

function featureOne() {
    opc_one.style.borderBottom = '3px solid hsl(231, 69%, 60%)';
    opc_two.style.border = 'none';
    opc_tree.style.border = 'none';

    container.style.animation = 'closesd 1s';

    container.innerHTML = `
        <img src="./images/illustration-features-tab-1.svg" alt="">
            <div class="textos-opc">
                <h2>Bookmark in one click</h2>
                <p> Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</p>
                <input type="button" value="More Info">    
            </div>
    `

    container.style.animation = 'opensd 1s';
    
    setTimeout(()=> {
        container.style.animation = 'none';
    }, 4000)
}

function featureTwo() {
    opc_two.style.borderBottom = '3px solid hsl(231, 69%, 60%)';
    opc_one.style.border = 'none';
    opc_tree.style.border = 'none';

    container.style.animation = 'closesd 3s';

    container.innerHTML = `
        <img src="./images/illustration-features-tab-2.svg" alt="">
            <div class="textos-opc">
                <h2>Intelligent search</h2>
                <p> Our powerful search feature will help you find saved sites in no time at all. 
                No need to trawl through all of your bookmarks.</p>
                <input type="button" value="More Info">    
            </div>
    `

    container.style.animation = 'opensd 1s';

    setTimeout(()=> {
        container.style.animation = 'none';
    }, 4000)
}


function featureTree() {
    opc_tree.style.borderBottom = '2px solid hsl(231, 69%, 60%)';
    opc_two.style.border = 'none';
    opc_one.style.border = 'none';

    container.style.animation = 'closesd 1s';

    container.innerHTML = `
        <img src="./images/illustration-features-tab-3.svg" alt="">
            <div class="textos-opc">
                <h2>Share your bookmarks</h2>
                <p>Easily share your bookmarks and collections with others. Create a shareable 
                link that you can send at the click of a button.</p>
                <input type="button" value="More Info">    
            </div>
    `

    container.style.animation = 'opensd 1s';

    setTimeout(()=> {
        container.style.animation = 'none';
    }, 4000)
}