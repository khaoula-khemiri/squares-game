
import React, {useEffect, useState} from 'react';
import './Board.css';


const BOARD_SIZE = 20;

const Board = () => {

  let board= [];
 for(let i=0 ; i<=BOARD_SIZE-1;i++){
     for(let j = 0; j<=BOARD_SIZE -1; j++){
        board.push(<div key={`${i},${j}`} id={`${i},${j}`} className="cell" >{i},{j}</div>)}
 }
  return(
        <div className='board'>
     {board}
     </div>
    )

  
};
export default Board;








