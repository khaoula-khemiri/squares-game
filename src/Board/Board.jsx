import './Board.css';


const BOARD_SIZE = 19;
const Board = () => {
 let board= [];
 for(let i=0 ; i<=BOARD_SIZE;i++){
    for(let j = 0; j<=BOARD_SIZE ; j++){
     board.push(<div key={`${i},${j}`} id={`${i},${j}`} className="cell" ></div>)
    }
  }

  return(
    <div className='board'>
     {board}
    </div>
  ) 
};
export default Board;








