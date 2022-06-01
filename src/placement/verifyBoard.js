export function verifyBoard(xMousePos,yMousePos,id,player,array,board){
    let piece=[] ;
    let debutCloumn ,finCloumn, debutRow ,finRow ;
    let yes,no,p,np;
    let placement=true;
    let xPiece=0;
    let yPiece=0;
    let ismiddle = true;
    let isIncorner=false;

    array.map((p)=>{if(p.id === id){piece = p.piece}});

    console.log(piece);
    
    //top left corner board
    if(xMousePos === 0 && yMousePos === 0){
     debutCloumn=yMousePos;
     finCloumn=yMousePos+ piece.length -2;
     debutRow=xMousePos ;
     finRow =xMousePos +piece[0].length-2;
     xPiece=1;
     yPiece=1;
     ismiddle = false;
     console.log("top left corner board");
    }

    // bottom left corner board
    if(xMousePos === 0 && yMousePos + piece.length === 19){
     debutCloumn=yMousePos-1;
     finCloumn=yMousePos+ piece.length -1;
     debutRow=xMousePos ;
     finRow =xMousePos +piece[0].length-2;
     xPiece=1;
     yPiece=0;
     ismiddle = false;
     console.log("bottom left corner board");
    }

    // top right corner board
    if(yMousePos === 0 && xMousePos +piece[0].length === 19){
     debutCloumn=yMousePos;
     finCloumn=yMousePos+ piece.length -2;
     debutRow=xMousePos-1 ;
     finRow =xMousePos +piece[0].length;
     xPiece=0;
     yPiece=1;
     ismiddle = false;
     console.log("top right corner board");
    }
    
    // bottom right corner board
    if(yMousePos+ piece.length -1 === 19 && xMousePos +piece[0].length === 19){
     debutCloumn=yMousePos-1;
     finCloumn=yMousePos+ piece.length ;
     debutRow=xMousePos-1 ;
     finRow =xMousePos +piece[0].length -1;
     xPiece=1;
     yPiece=1;
     ismiddle = false;
     console.log("bottom right corner board");
    }

    //left board
    if(xMousePos === 0 && yMousePos !== 0 && yMousePos !== 19){
     debutCloumn=yMousePos-1;
     finCloumn=yMousePos+ piece.length -1;
     debutRow=xMousePos ;
     finRow =xMousePos +piece[0].length-2;
     xPiece=1;
     yPiece=0;
     ismiddle = false;
     console.log("left board");
    }
    
    //top board
    if(yMousePos === 0 && xMousePos!== 0){
      debutCloumn=yMousePos;
      finCloumn=yMousePos+ piece.length -2;
      debutRow=xMousePos-1 ;
      finRow =xMousePos +piece[0].length-1; 
      xPiece=0;
      yPiece=1;
      ismiddle = false;
      console.log("top board");
    }

    //bottom board
    if(yMousePos + piece.length === 19 && xMousePos!== 0 && xMousePos!== 19 ){
     debutCloumn=yMousePos-1;
     finCloumn=19;
     debutRow=xMousePos-1 ;
     finRow =xMousePos +piece[0].length-1; 
     xPiece=0;
     yPiece=0;
     ismiddle = false;
     console.log("bottom board");
    }
    
    //right board
    if((xMousePos + piece[0].length) === 19 && yMousePos !== 0 && yMousePos !== 19 ){
        debutCloumn=yMousePos-1;
        finCloumn=19;
        debutRow=xMousePos-1 ;
        finRow =19; 
        xPiece=0;
        yPiece=0;
        ismiddle = false;
        console.log("right board");
    }
    

    // in the middle
    if(ismiddle){
        debutCloumn=yMousePos-1;
        finCloumn=yMousePos + piece.length-1;
        debutRow=xMousePos-1 ;
        finRow =xMousePos +piece[0].length-1; 
        xPiece=0;
        yPiece=0; 
        console.log("in the middle");
    }
 
    if(player==="green"){yes="yg";no="ng";p="g";np="r"}
    else{yes="yr";no="nr";p="r";np="g"}
 
    // verify placement
    let xpos=xPiece
    for(let i=debutCloumn; i<=finCloumn;i++){
      let yPos=yPiece;
      for(let j= debutRow;j<=finRow;j++){
        if((board[i][j] === p && piece[xpos][yPos] === p) || (piece[xpos][yPos]===no &&  piece[xpos][yPos] === p)
        ||(board[i][j] === np && piece[xpos][yPos] === p) )
       {placement =false }
       if(board[i][j] === yes && piece[xpos][yPos] === p){isIncorner=true;}
       yPos=yPos+1;}
       xpos=xpos+1;
    }

    //place piece
    console.log(placement);
    let xposP = xPiece;
    if(placement && isIncorner){
     for(let i = debutCloumn; i <= finCloumn;i++){
       let yposP = yPiece;
       for(let j = debutRow; j <= finRow;j++){
         if(board[i][j] !== no){board[i][j]=piece[xposP][yposP];}
         yposP=yposP+1;
       }
       xposP=xposP+1;
     }}

     console.log(board);
     return placement;
  }
