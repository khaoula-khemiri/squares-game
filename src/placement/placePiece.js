
export function placePiece (id,player,array,board){
  let piece=[] ;
  let debutCloumn ,finCloumn, debutRow ,finRow ;
  let yes,no,p,np;
  let placement=false;
  let xPiece=0;
  let yPiece=0;


  array.map((p)=>{if(p.id === id){piece=p.piece}});
  console.log(piece);
  
//top left corner board
if(player === "green"){
  debutCloumn=0;
  finCloumn= piece.length -2;
  debutRow=0 ;
  finRow =piece[0].length-2;
  xPiece=1;
  yPiece=1;
  yes="yg";no="ng";p="g";np="r";
  if(piece[1][1]===p){placement=true}
 }

 // bottom right corner board
 if(player === "red"){
  debutCloumn=21-piece.length;
  console.log(piece[piece.length-2][piece[0].length -2]);
  finCloumn=19 ;
  debutRow=21-piece[0].length  ;
  console.log(debutRow);
  finRow =19;
  xPiece=0;
  yPiece=0;
  yes="yr";no="nr";p="r";np="g";
  if(piece[piece.length-2][piece[0].length -2] === p){placement=true}
 }

 

//place piece
console.log(placement);
let xposP=xPiece;
if(placement){
 for(let i=debutCloumn; i<=finCloumn;i++){
   let yposP=yPiece;
   for(let j= debutRow;j<=finRow;j++){
     console.log(piece[xposP][yposP]);
     board[i][j]=piece[xposP][yposP];
     yposP=yposP+1;
   }
   xposP=xposP+1;
 }}

 console.log(board);
 return placement;
 }
 