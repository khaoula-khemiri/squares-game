import {PieceG,PieceR} from './pieces';

function rotate90(id,type){ 
 let array = type === "R"? PieceR : PieceG;
 let piece=[];
 let rotatePiece=[];
 array.map((p)=>{if(p.id === id){piece=p.piece}});

  //rotate 90deg matrice of the piece
 for(let i=0;i<=piece[0].length-1;i++){
     let row=[];
       for(let j=piece.length-1; j>=0;j--){
            row.push(piece[j][i]);
        }
     rotatePiece.push(row);
    }

 array.map((p)=>{if(p.id === id){p.piece=rotatePiece}});
    
   
}

// flip matrice of the piece 
function flip90(id,type){
 let array = type === "R"? PieceR : PieceG;
 let piece=[];
 let rotatePiece=[];
 array.map((p)=>{if(p.id === id){piece=p.piece}});
    for(let i=0; i<=piece.length-1;i++){
        let row=[];
      for(let j=piece[0].length-1;j>=0;j--){
            row.push(piece[i][j]);
        }
     rotatePiece.push(row);
    }   
}

export {rotate90};
export {flip90};