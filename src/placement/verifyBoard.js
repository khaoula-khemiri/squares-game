export function verifyBoard(xMousePos,yMousePos,id,player,array,board){
    let piece=[] ;
    let debutCloumn ,finCloumn, debutRow ,finRow ;
    let yes,no,p,np,ynp;
    let yrg="yrg"
    let placement=true;
    let xPiece=0;
    let yPiece=0;
    let ismiddle = true;
    let isIncorner=false;
    let isgoodPlace=false;

    array.map((p)=>{if(p.id === id){piece = p.piece}});

    //console.log(piece);
    
    //pieces is in the top left corner board
    if(xMousePos === 0 && yMousePos === 0){
     debutCloumn=yMousePos;
     finCloumn=yMousePos+ piece.length -2;
     debutRow=xMousePos ;
     finRow =xMousePos +piece[0].length-2;
     xPiece=1;
     yPiece=1;
     ismiddle = false;
     //console.log("top left corner board");
    }

    // pieces is in the bottom left corner board
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

    // pieces is in the top right corner board
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
    
    //pieces is in the bottom right corner board
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

    //pieces is in the left board
    if(xMousePos === 0 && yMousePos !== 0 && yMousePos !== 19){
     debutCloumn=yMousePos-1;
     finCloumn=yMousePos+ piece.length -2;
     debutRow=xMousePos ;
     finRow =xMousePos +piece[0].length-2;
     xPiece=0;
     yPiece=1;
     ismiddle = false;
     console.log("left board");
    }
    
    //pieces is in the top board
    if(yMousePos === 0 && xMousePos!== 0 && xMousePos!== 19){
      console.log(xMousePos);
      console.log(yMousePos);
      debutCloumn=yMousePos;
      finCloumn=yMousePos+ piece.length -2;
      debutRow=xMousePos-1 ;
      finRow =xMousePos +piece[0].length-2; 
      xPiece=1;
      yPiece=0;
      ismiddle = false;
      console.log("top board");
    }

    //pieces is in the bottom board
    if(yMousePos + piece.length -3 === 19 && xMousePos!== 0 && xMousePos!== 19 ){
     debutCloumn = yMousePos - 1;
     finCloumn = 19;
     debutRow=xMousePos - 1 ;
     finRow =xMousePos + piece[0].length-2; 
     xPiece=0;
     yPiece=0;
     ismiddle = false;
     console.log("bottom board");
    }
    
    //pieces is in the right board
    if((xMousePos + piece[0].length -3) === 19 && yMousePos !== 0 && yMousePos !== 19 ){
        debutCloumn=yMousePos-1;
        finCloumn=yMousePos+ piece.length -2;
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
       finCloumn=yMousePos + piece.length-2;
       debutRow=xMousePos-1 ;
       finRow =xMousePos +piece[0].length-2; 
       xPiece=0;
       yPiece=0; 
       console.log("in the middle");
    }
    /*yg = we can put green pieces  
    ng = we can't put  green pieces 
    g = it's a  green pieces 
    yrg = we can put green or red pieces (same thing for "yr,nr,r")*/ 
    
    if(player==="green"){yes="yg";no="ng";p="g";np="r" ;ynp="yr"}
    else{yes="yr";no="nr";p="r";np="g";ynp="yg"}
 
    /* verify placement of the piece in the board:
        in the code below we compare the board matrice with the piece matrice
    */
    let xpos=xPiece
    for(let i=debutCloumn; i<=finCloumn;i++){
      let yPos=yPiece;
      for(let j= debutRow;j<=finRow;j++){
        //verify if there is no green or red piece in the board 
        if((board[i][j] === p && piece[xpos][yPos] === p) || (board[i][j]===no &&  piece[xpos][yPos] === p)
        ||(board[i][j] === np && piece[xpos][yPos] === p) )
        {placement =false;/*piece isn't in the correct place*/}
    
       if((board[i][j] === yes || board[i][j] === yrg ) && piece[xpos][yPos] === p)
       {isIncorner=true;/* piece is in the corner of other piece with the same color*/}
       yPos=yPos+1;
      }
      xpos=xpos+1;
    }

    
    //place pieces
    let xposP = xPiece;
    if(placement && isIncorner){
     for(let i = debutCloumn; i <= finCloumn;i++){
       let yposP = yPiece;
       for(let j = debutRow; j <= finRow;j++){
         if(board[i][j] === ynp &&  piece[xposP][yposP] === yes){board[i][j]=yrg}  // we can put green or red pieces = "yrg"
         if(board[i][j] !== no && board[i][j] !== p && board[i][j] !==yrg){board[i][j]=piece[xposP][yposP]};
         if(board[i][j]===ynp && piece[xposP][yposP]==0){board[i][j]= ynp}
         if(board[i][j] ===yrg && piece[xposP][yposP]==p){board[i][j]=piece[xposP][yposP]}
         yposP=yposP+1;
       }
       xposP=xposP+1;
     }
     isgoodPlace=true;}

     console.log(board);
     return isgoodPlace;
  }
