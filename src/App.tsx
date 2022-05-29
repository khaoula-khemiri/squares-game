import Board from './Board/Board.jsx';
import PieceZone from './piece/piece-zone.js';
import React, {useState,useEffect} from 'react';
import './App.css';
import swal from 'sweetalert';
import { getElementError } from '@testing-library/react';



function App  () {
  const [xint, setXint] = useState<number>();
  const [yint, setYint] = useState<number>();
  const [xright, setXright] = useState<number>();
  const [ybottom, setYbottom] = useState<number>();
  const [player, setPlayer] = useState("green");
  const[begin,setBegin]=useState(0);
  const[eleLeft,setEleleft]= useState<string>();
  const[eletop,setEletop]= useState<string>();
  const[board,setBoard]=useState([]);
  const[score,setScore]=useState(0);


  let activePiec : HTMLElement|null= null;
   
  let PieceR =[]
  PieceR.push({id:"1r",longueur:4,largeur:1,pos:0});
  PieceR.push({id:"2r",longueur:3,largeur:2,pos:2});
  PieceR.push({id:"3r",longueur:4,largeur:2,pos:1});



  let PieceG =[]
  PieceG.push({id:"1g",longueur:4,largeur:1,pos:0});
  PieceG.push({id:"2g",longueur:3,largeur:2,pos:2});
  PieceG.push({id:"3g",longueur:4,largeur:2,pos:1});
  PieceG.push({id:"4g",longueur:2,largeur:2,pos:0});

  // play board
 let test=[];
 const BOARD_SIZE = 20;
 for(let i=0 ; i<=BOARD_SIZE-1;i++){
   let row=[];
     for(let j = 0; j<=BOARD_SIZE -1; j++){
      row.push(0)}
      test.push(row)
 }

 

  useEffect(() => {
    // take play board top and lef position 
    const el = document.getElementById("play");
     var rect = el.getBoundingClientRect();
     console.log(rect);
     setXint(rect.x);
     setYint(rect.y); 
     setXright(rect.right);
     setYbottom(rect.bottom);
     setBoard(test);
     console.log('mount it!');
     console.log(test);
     console.log(board);
     console.log(xint);
     console.log(yint);
     swal("Let's Play!", " Are you ready !", "success");
  }, []);
  

  React.useEffect(() => {
    //resizeing screen 
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
      const el = document.getElementById("play");
      var rect = el.getBoundingClientRect();
      setXint(rect.left);
      setYint(rect.top);       
      setXright(rect.right);
      setYbottom(rect.bottom);
      console.log(xint);
      console.log(yint);
    }
   window.addEventListener('resize', handleResize)
  })

  //grape pieces
  function grapepiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    const element= e.target as HTMLElement;
    setEleleft(element.parentElement.style.left);
    setEletop(element.parentElement.style.top);
    const x = e.clientX ;
    const y = e.clientY ;
    if(player === "green"){
       if(element.classList.contains("green-piece")){
         element.style.position = "absolute";
         element.style.left = `${x}px`;
         element.style.top = `${y}px`;
         activePiec = element;}}
   else{
     if(element.classList.contains("red-piece")){
       element.style.position = "absolute";
       element.style.left = `${x}px`;
       element.style.top = `${y}px`;
       activePiec = element;
     }
    }
  }

  
 // move pieces
 function  movePiece(e: React.MouseEvent){
  if(activePiec ){
   const x = e.clientX ;
   const y = e.clientY ;
   let xL = Math.round((e.clientX-xint)/20);
   let yL = Math.round((e.clientY-yint)/20);
   activePiec.style.position = "absolute";
   activePiec.style.left = `${x}px`;
   activePiec.style.top = `${y}px`;
   console.log(x,y);
   console.log(xL,yL);
 }}


 // drope pieces
 function dropepiece(e: React.MouseEvent){
   console.log(e);
   let xL = Math.round(((e.clientX-xint)/20));
   let yL = Math.round(((e.clientY-yint)/20));
   let longueur;
   let largeur;
   let pos;
   if(activePiec ){
     if(begin == 2){
       //if the position is true 
       if(xL<20 && xL>0 && yL<20 && yL>0){ 
         if(player==="green"){
           setPlayer("red");
           activePiec.className="inactive";}
         else{setPlayer("green");activePiec.className="inactive"}}
       else{
          // back to the initiale position
         activePiec.style.left = eleLeft; 
         activePiec.style.top = eletop;}
      }else{
        // in the begining of the game at the corner
       if(player==="green"){
         let posx=xint ;
         let posy=yint;
         activePiec.style.left = `${posx}px`;
         activePiec.style.top = `${posy}px`;
         setPlayer("red");
         setBegin(1);
          activePiec.className="inactive";}
       else{
         let posxR=xright-activePiec.offsetWidth;
         let posyB=ybottom-activePiec.offsetHeight;
         activePiec.style.left = `${posxR}px`;
         activePiec.style.top = `${posyB}px`;
         setPlayer("green");
         setBegin(2);
         activePiec.className="inactive";
        }
      }
      activePiec= null;
    }
  }
 
 return(
  <div className= "App"
   onMouseMove= {e=> movePiece(e)}
   onMouseDown= {e=>grapepiece(e)} 
   onMouseUp= {e=>dropepiece(e)}  
   >

    <div className='container' >

     <div>
        <div className='score'>score:{score}</div>
       <PieceZone type={"G"} ></PieceZone>
     </div>

     <div className='play-container'> 
       <div className='result-zone'>
         <div className=" button1"></div>
         <div className="button3" ></div>
         <div className='player' >
           <div className='player-Name'>Player:</div>
           <div className={player === 'green' ? "green" : "red"}>{player}</div>
         </div>
       </div>

       <div className='play-zone'  id="play">
          <Board></Board>
       </div>
     </div>
     
     <div>
       <div className='score'>score:{score}</div>
       <PieceZone type={"R"}></PieceZone>
     </div>
     

    </div>
    

    
  </div>)
};

export default App;


/* return(
  <div className= "App"
   onMouseMove= {e=> movePiece(e)}
   onMouseDown= {e=>grapepiece(e)} 
   onMouseUp= {e=>dropepiece(e)}  
   >

    <div className='container' >

     <div>
        <div className='score'>score:{score}</div>
       <PieceZone type={"G"} ></PieceZone>
     </div>

     <div className='play-container'> 
       <div className='result-zone'>
         <div className=" button1"></div>
         <div className="button3" ></div>
         <div className='player' >
           <div className='player-Name'>Player:</div>
           <div className={player === 'green' ? "green" : "red"}>{player}</div>
         </div>
       </div>

       <div className='play-zone'  id="play">
          <Board></Board>
       </div>
     </div>
     
     <div>
       <div className='score'>score:{score}</div>
       <PieceZone type={"R"}></PieceZone>
     </div>
     

    </div>
    

    
  </div>)
};*/


