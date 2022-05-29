import React, {useEffect, useState} from 'react';
import './piece-zone.css';

function PieceZone ({type}){

// array of red pieces
// image : src 
// l : width of the image
// m : height of the image 
 const piecesR =[];
 piecesR.push({image: "./image/red4.png" ,l:4 , m:1 ,id:"1r"});
 piecesR.push({image: "./image/red3-1.png" ,l:3 , m:2,id:"2r" });
 piecesR.push({image: "./image/red4-1.png" ,l:4 , m:2 ,id:"3r"});
 piecesR.push({image: "./image/red4.png" ,l:4 , m:1 ,id:"4r"});
 piecesR.push({image: "./image/red3-1.png" ,l:3 , m:2 ,id:"5r"});
 piecesR.push({image: "./image/red4-1.png" ,l:4 , m:2 ,id:"6r"});
 piecesR.push({image: "./image/red4.png" ,l:4 , m:1 ,id:"7r"});
 piecesR.push({image: "./image/red3-1.png" ,l:3 , m:2,id:"8r" });
 piecesR.push({image: "./image/red4-1.png" ,l:4 , m:2 ,id:"9r"});

// array of red pieces
 const piecesG =[];
 piecesG.push({image: "./image/green4.png" ,l:4 , m:1,id:"1g" });
 piecesG.push({image: "./image/green3-1.png" ,l:3 , m:2,id:"2g" });
 piecesG.push({image: "./image/green4-1.png" ,l:4 , m:2 ,id:"3g"});
 piecesG.push({image: "./image/green2-1.png" ,l:2 , m:2 ,id:"4g"});
 piecesG.push({image: "./image/green3-1.png" ,l:3 , m:2,id:"5g" });
 piecesG.push({image: "./image/green4-1.png" ,l:4 , m:2 ,id:"6g"});
 piecesG.push({image: "./image/green4.png" ,l:4 , m:1 ,id:"7g"});
 piecesG.push({image: "./image/green3-1.png" ,l:3 , m:2 ,id:"8g"});
 piecesG.push({image: "./image/green4-1.png" ,l:4 , m:2 ,id:"9g"});




 let list= [];
 for(let i=0 ; i<=4;i++){
    for(let j = 0; j<=3 ; j++){
       if(type=="R"){
         let image=piecesR[j].image;
         let long=20*piecesR[j].l;
         let ep=20*piecesR[j].m;
         let id=piecesR[j].id;
         list.push(<div key={`${i},${j}`} className='tail '> 
                   <img id={id} src={image} width={long} height={ep} className="red-piece"/>
                  </div>)
        }else{
         let image=piecesG[j].image;
         let long=20*piecesG[j].l;
         let ep=20*piecesG[j].m;
         let id=piecesG[j].id;
         list.push(<div key={`${i},${j}`} className='tail '> 
                 <img id={id} src={image} width={long} height={ep} className="green-piece"/>
                 </div>)
        }
    }

 }
 
 
    return(
     <div className='piece-zone'>
     {list}
     </div>
    )

}
export default PieceZone;

/*<div className='button-icon'>
                   <div className='rotate'></div>
                   <div className='flip'></div>
                    </div>*/