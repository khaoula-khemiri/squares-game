import React, {useEffect, useState} from 'react';
import './piece-zone.css';
import {rotate,flip} from './rotatePiece';
import {PieceImageR,PieceImageG} from './piecesImage';

function PieceZone ({type}){
 let list= [];
 let image,long,ep,id;
 let array = type === "R"? PieceImageR : PieceImageG;
 let className = type==="R"?"red-piece":"green-piece";

   for(let j = 0; j<=19 ; j++){
    image=array[j].image;
    long=20*array[j].l;
    ep=20*array[j].m;
    id=array[j].id;
    list.push(
        <div key={`${type}${j}`} className='tail'> 
          <div className='image'>
             <img id={id} src={image} width= {long} height={ep} data-image="0NonFlip" transform="rotate(360deg)" className={className}/>
          </div>
          <div className='button-icon'>
             <div className='rotate' onClick={() =>rotate(array[j].id,type)}></div>
             <div className='flip' onClick={() =>flip(array[j].id,type)}></div>
          </div>
       </div>
      )  
   }

   return(
     <div className='piece-zone'>
     {list}
     </div>
   )

}
export default PieceZone;

