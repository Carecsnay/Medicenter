window.onload = function () {
    document.querySelector('.menu_mobile').addEventListener('click', function(){
        if(document.querySelector('body > header > div > div.menu > nav > ul').style.display=='flex'){
            document.querySelector('body > header > div > div.menu > nav > ul').style.display='none';
        } else {
            document.querySelector('body > header > div > div.menu > nav > ul').style.display='flex';
        }
    });
};

console.log('VOCÊ É MUITO CURIOSO!')
console.log('POR GENTILEZA, SAIA DO MODO DESENVOLVEDOR APERTANDO F12.')