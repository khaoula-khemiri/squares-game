import Board from './Board/Board.jsx';
import PieceZone from './piece/piece-zone.js';
import React, {useState,useEffect} from 'react';
import './App.css';
import swal from 'sweetalert';
import {placePiece} from './placement/placePiece.js';
import {verifyBoard} from './placement/verifyBoard.js';
import {PieceG,PieceR} from './piece/pieces';



function App  () {
  const [xBoardTop, setxBoardTop] = useState<number>();
  const [yBoardLeft, setyBoardLeft] = useState<number>();
  const [xBoardright, setxBoardright] = useState<number>();
  const [yBoardbottom, setyBoardbottom] = useState<number>();
  const [player, setPlayer] = useState("green");
  const [stage,setStage]=useState(0);
  const [xElementParent,setxElementParent] = useState<string>();
  const [yElementParent,setyElementParent] = useState<string>();
  const [board,setBoard]=useState([]);
  const [scoreG,setScoreG]=useState(0);
  const [scoreR,setScoreR]=useState(0);
  const [activePiec,setactivePiec]=useState<HTMLElement>(null);

   
 // play board : Matrix(20X20) box  = 0 
 let test=[];
 const BOARD_SIZE = 19;
 for(let i=0 ; i<=BOARD_SIZE;i++){
   let row=[];
     for(let j = 0; j<=BOARD_SIZE; j++){
      row.push(0)}
      test.push(row)
 }

 

  useEffect(() => {
    // take play board top and left position 
     const boardElement = document.getElementById("play");
     var rect = boardElement.getBoundingClientRect();
     setxBoardTop(rect.x);
     setyBoardLeft(rect.y); 
     setxBoardright(rect.right);
     setyBoardbottom(rect.bottom);
     setBoard(test);
     swal("Let's Play!", " Are you ready !", "success");
  }, []);
  

  React.useEffect(() => {
    //resizeing screen : take the new board top and left position
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      console.log(board);
      const el = document.getElementById("play");
      var rect = el.getBoundingClientRect();
      setxBoardTop(rect.left);
      setyBoardLeft(rect.top);       
      setxBoardright(rect.right);
      setyBoardbottom(rect.bottom);
    }
   window.addEventListener('resize', handleResize)
  })



  //grape pieces
  function grapepiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    const element= e.target as HTMLElement;
    const xMouse = e.clientX ;
    const yMouse = e.clientY ;
    setxElementParent(element.parentElement.style.left);
    setyElementParent(element.parentElement.style.top);
    
    if(player === "green"){
      if(element.classList.contains("green-piece")){setactivePiec(element);}}
    if(player === "red"){
      if(element.classList.contains("red-piece")){setactivePiec(element);}}
    if(activePiec){
    activePiec.style.position = "absolute";
    activePiec.style.left = `${xMouse}px`;
    activePiec.style.top  = `${yMouse}px`;
    }
  }

  
 // move pieces
 function  movePiece(e: React.MouseEvent){
  if(activePiec){
   const xMouse = e.clientX ;
   const yMouse = e.clientY ;
   activePiec.style.position = "absolute";
   activePiec.style.left = `${xMouse}px`;
   activePiec.style.top  = `${yMouse}px`;
  }}


 // drope pieces
 function dropepiece(e: React.MouseEvent){
   console.log("mouse drope",e);
   let xBoardPos = Math.round(((e.clientX-xBoardTop)/20)); 
   let yBoardPos = Math.round(((e.clientY-yBoardLeft)/20));
   let newx = xBoardTop+(xBoardPos*20);
   let newy = yBoardLeft+( yBoardPos*20);
   let placement=false;
   let isInPlayZone=false;
   let id;
   // verify if pieces are in the play zone 
   if(xBoardPos<20 && xBoardPos>=0 && yBoardPos<20 && yBoardPos>=0){isInPlayZone =true }

   if(activePiec && isInPlayZone ){
     id = activePiec.id; //get the id to know which piece we had

      if(stage!=2){  // in the beginning of the game we put pieces at the corner
        if(player==="green"){
          newx=xBoardTop;
          newy=yBoardLeft;
          placement =placePiece(id,player,PieceG,board);
          setStage(1);
         }
        if(player === "red"){
          newx=xBoardright-activePiec.offsetWidth;
          newy=yBoardbottom-activePiec.offsetHeight;
          placement =placePiece(id,player,PieceR,board);
          setStage(2);
        }
      }

     if(stage == 2){
          if(player === "green"){
           placement = verifyBoard(xBoardPos,yBoardPos,id,player,PieceG,board)
          }
          if(player === "red"){
            placement =verifyBoard(xBoardPos,yBoardPos,id,player,PieceR,board);
          }
      }
    }

    if(placement){ //if the place is correct put pieces and calculate score
      player==="green"?calculScore(player,PieceG,id):calculScore(player,PieceR,id);
      player=="green"? setPlayer("red"):setPlayer("green");
      activePiec.style.left = `${newx}px`;
      activePiec.style.top = `${newy}px`;
      activePiec.className="inactive";
    }

    if(placement===false && activePiec){//if the place is not correct return pieces to the initial position
      activePiec.style.left = xElementParent; 
      activePiec.style.top = yElementParent;
    }

    highlightDiv(board);
    setactivePiec(null);
  }




  //highlightDiv
  function highlightDiv(board){
    for(let i =0; i <=BOARD_SIZE ;i++){
      for(let j =0 ;j <=BOARD_SIZE ;j++){
       let element = document.getElementById(`${i},${j}`);
        board[i][j] === "yg"?  element.style.backgroundColor = "rgb(176, 232, 185)"
       :board[i][j] === "yr"? element.style.backgroundColor = "rgb(232, 176, 176)"
       :board[i][j] === "yrg"? element.style.backgroundColor = "rgb(245, 149, 6)"
       :element.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  }


  // calculate score
  function calculScore(player,array,id){
    let newScore =0;
    array.map((p)=>{if(p.id === id){newScore=p.numSquares}});
    player === "green"? newScore = scoreG +newScore : newScore = scoreR + newScore;
    player === "green"?setScoreG(newScore) : setScoreR(newScore);
  }
  
 
 return(
  <div className= "App"
   onMouseMove= {e=> movePiece(e)}
   onMouseDown= {e=>grapepiece(e)} 
   onMouseUp= {e=>dropepiece(e)}  
   >

    <div className='container' >
     <div className='result-zone'>
       <div className='score'>score:{scoreG}</div>
       <div className=" button1"></div>
       <div className="button3" ></div>
       <div className='player' >
         <div className='player-Name'>Player:</div>
         <div className={player === 'green' ? "green" : "red"}>{player}</div>
       </div>
       <div className='score'>score:{scoreR}</div>
     </div>

     <div className='play-container'>
       <div className='pieceZone'>
         <PieceZone type={"G"} ></PieceZone>
       </div>
       
       <div className='play-zone'  id="play">
         <Board ></Board>
       </div>
     
       <div className='pieceZone'>
         <PieceZone type={"R"}></PieceZone>
       </div>
     </div>
     

    </div>
    

    
  </div>)
};

export default App;


//if(xBoardPos == 0 || xBoardPos == 19 || yBoardPos == 0 || yBoardPos == 19){placement =verifyBoard(xBoardPos,yBoardPos,id,player,PieceR,board);}
            //else{placement =verifyBoard(xBoardPos,yBoardPos,id,player,PieceR,board)};