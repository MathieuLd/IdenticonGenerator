
const width = 400;
const height = 400;


function setup(){
    let canvas = createCanvas(width,height);
    canvas.parent('sketchDiv');
    background(255);
}

function draw(){
    
}


function drawIdenticon(color, identiconArray){

    // Clearing canvas
    background(255);

    // Drawing rectangle
    identiconCellWidth = width / identiconArray.length;
    identiconCellHeight = height / identiconArray[0].length;

    fill(color);
    noStroke();

    for (let i = 0; i < identiconArray.length; i++) {
        for (let j = 0; j < identiconArray[0].length; j++) {
            if(identiconArray[i][j] == 1){
                rect(i*identiconCellWidth,j*identiconCellHeight,identiconCellWidth,identiconCellHeight);
            }
        }
    }
}