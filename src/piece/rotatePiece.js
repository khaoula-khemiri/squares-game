import {PieceImageR,PieceImageG} from './piecesImage';
import{rotate90,flip90} from './rotateAngle';

function rotate(id,type){
 let element =document.getElementById(id);
 let angle=element.dataset.image;
 // rotate image of the piece
 // I'm working on this!!
 if(angle === "0NonFlip"){
     element.style.transform="rotate(90deg)";
     element.dataset.image="90NonFlip";
     rotate90(id,type); // rotate matrice of the piece
    }

 if(angle === "90NonFlip"){
     element.style.transform="rotate(180deg)";
     element.dataset.image="180NonFlip";
     rotate90(id,type); 
    }

 if(angle === "180NonFlip"){
     element.style.transform="rotate(270deg)";
     element.dataset.image="270NonFlip";
     rotate90(id,type); 
    }

 if(angle === "270NonFlip"){
     element.style.transform="rotate(360deg)";
     element.dataset.image="0NonFlip";
     rotate90(id,type); 
    }

}

// flip image of the piece 
// I'm working on this!!
function flip(id,type){
 let element =document.getElementById(id);
 element.style.transform="rotateY(90deg)";
 flip90(id,type);// flip matrice ofv the piece 
}

export{rotate};
export{flip};