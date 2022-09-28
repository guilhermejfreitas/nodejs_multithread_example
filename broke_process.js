/*
    Ao rodar esse trecho o loop irá travar o node,
    impossibilitando que o interval seja executado.
    Isso não acontece quando executados o for em outra thread,
    ou seja, paralelo ao inverval.
*/

setInterval(() => { console.log(`Running every second`)})

for (let i = 0; i < 1e9; i++);