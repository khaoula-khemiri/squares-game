let PieceR =[]
  PieceR.push({id:"1r",
               piece:[["yr","nr","nr","nr","nr","yr"],
                      ["nr","r","r","r","r","nr"],
                      ["yr","nr","nr","nr","nr","yr"]],
               numSquares:4});
  PieceR.push({id:"2r",
               piece:[[0,"yr","nr","yr",0],
                      ["yr","nr","r","nr","yr"],
                      ["nr","r","r","r","nr"],
                      ["yr","nr","nr","nr","yr"]],
              numSquares:4});
  PieceR.push({id:"3r",
              piece:[[0,0,0,"yr","nr","yr"],
                     ["yr","nr","nr","nr","r","nr"],
                     ["nr","r","r","r","r","nr"],
                     ["yr","nr","nr","nr","nr","yr"]],
              numSquares:5});



  let PieceG =[]
  PieceG.push({id:"1g",
               piece:[["yg","ng","ng","ng","ng","yg"],
                      ["ng","g","g","g","g","ng"],
                      ["yg","ng","ng","ng","ng","yg"]],
               numSquares:4});
  PieceG.push({id:"2g",
               piece:[[0,"yg","ng","yg",0],
               ["yg","ng","g","ng","yg"],
               ["ng","g","g","g","ng"],
               ["yg","ng","ng","ng","yg"]],
               numSquares:4});
  PieceG.push({id:"3g",
              piece:[["yg","ng","ng","ng","ng","yg"],
                     ["ng","g","g","g","g","ng"],
                     ["ng","g","ng","ng","ng","yg"],
                     ["yg","ng","yg",0,0,0]],
              numSquares:5});

export {PieceG};
export {PieceR};