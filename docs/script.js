window.onload = init;
let usernameInputElem;
let generateButtonElem;


function init(){
    usernameInputElem = window.document.getElementById("usernameInput");
    generateButtonElem = window.document.getElementById("generateButton");
    generateButtonElem.onclick = generateIdenticon;
}

function generateIdenticon(){
    hash = md5(usernameInputElem.value)
    let hashByteSlice = []
    for (let i = 0; i < hash.length; i+=2) {
        hashByteSlice.push(parseInt(hash.slice(i,i+2), 16))
    }
    let c = color(hashByteSlice[0],hashByteSlice[1],hashByteSlice[2])
    
    let identiconCellBinary = (('0000000'+ hashByteSlice[3].toString(2)).slice(-8) + ('0000000'+ hashByteSlice[4].toString(2)).slice(-8)).slice(0,15)
    let identiconArray = []
    for (let i = 0; i < identiconCellBinary.length; i+=5) {
        identiconArray.push(identiconCellBinary.slice(i,i+5))
    }
    identiconArray.push(identiconArray[1]);
    identiconArray.push(identiconArray[0]);
    drawIdenticon(c, identiconArray)
}