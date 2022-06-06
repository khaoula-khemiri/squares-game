let PieceR =[]
 /*yg = we can put green pieces  
    ng = we can't put  green pieces 
    g = it's a  green pieces 
    yrg = we can put green or red pieces (same thing for "yr,nr,r")*/ 
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

PieceR.push({id:"4r",
              piece:[[0,0,"yr","nr","yr",0],
              ["yr","nr","nr","r","nr","yr"],
              ["nr","r","r","r","r","nr"],
              ["yr","nr","nr","nr","nr","yr"]],
             numSquares:5});

PieceR.push({id:"5r",
             piece:[["yr","nr","yr",0],
                    ["nr","r","nr","yr"],
                    ["nr","r","r","nr"],
                    ["yr","nr","nr","yr"]],
            numSquares:3});

PieceR.push({id:"6r",
             piece:[[0,"yr","nr","yr",0],
                   [0,"nr","r","nr",0],
                   ["yr","nr","r","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
            numSquares:5});

PieceR.push({id:"7r",
             piece:[[0,"yr","nr","yr",0],
                   ["yr","nr","r","nr","yr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","r","nr"],
                   [0,0,"yr","nr","yr"],],
            numSquares:5});

PieceR.push({id:"8r",
            piece:[["yr","nr","nr","yr"],
                   ["nr","r","r","nr"],
                   ["nr","r","r","nr"],
                   ["yr","nr","nr","yr"]],
           numSquares:4});

PieceR.push({id:"9r",
             piece:[[0,"yr","nr","nr","nr","yr"],
                   ["yr","nr","r","r","r","nr"],
                   ["nr","r","r","nr","nr","yr"],
                   ["yr","nr","nr","yr",0,0]],
           numSquares:5});
PieceR.push({id:"10r",
           piece:[["yr","nr","yr","nr","yr"],
                  ["nr","r","nr","r","nr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
           numSquares:5});

PieceR.push({id:"11r",
             piece:[[0,0,"yr","nr","yr"],
                    ["yr","nr","nr","r","nr"],
                    ["nr","r","r","r","nr"],
                    ["nr","r","nr","nr","yr"],
                    ["yr","nr","yr",0,0]],
          numSquares:4});

PieceR.push({id:"12r",
          piece:[[0,0,"yr","nr","yr"],
                 [0,"yr","nr","r","nr"],
                 ["yr","nr","r","r","nr"],
                 ["nr","r","r","nr","yr"],
                 ["yr","nr","nr","yr","nr"]],
          numSquares:5});

PieceR.push({id:"13r",
             piece:[["yr","nr","nr","yr",0],
                    ["nr","r","r","nr","yr"],
                    ["yr","nr","r","r","nr"],
                    [0,"yr","nr","nr","yr"]],
           numSquares:4});

PieceR.push({id:"14r",
           piece:[["yr","nr","nr","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
          numSquares:3});

PieceR.push({id:"15r",
            piece:[[0,"yr","nr","nr","yr"],
                  ["yr","nr","r","r","nr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","nr","nr","yr"]],
          numSquares:5});

PieceR.push({id:"16r",
             piece:[["yr","nr","yr",0,0],
                   ["nr","r","nr",0,0],
                   ["nr","r","nr","nr","yr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","nr","yr"]],
          numSquares:5});

PieceR.push({id:"17r",
            piece:[[0,"yr","nr","yr",0],
                  ["yr","nr","r","nr","yr"],
                  ["nr","r","r","r","nr"],
                  ["yr","nr","r","nr","yr"],
                  [0,"yr","nr","yr",0]],
         numSquares:5});
         
PieceR.push({id:"18r",
             piece:[[0,0,"yr","nr","yr"],
                   ["yr","nr","nr","r","nr"],
                   ["nr","r","r","r","nr"],
                   ["yr","nr","nr","nr","yr"]],
         numSquares:4});

PieceR.push({id:"19r",
          piece:[["yr","nr","yr"],
                 ["nr","r","nr"],
                 ["yr","nr","yr"]],
          numSquares:1});

          PieceR.push({id:"20r",
          piece:[["yr","nr","nr","yr"],
                 ["nr","r","r","nr"],
                 ["yr","nr","nr","yr"]],
         numSquares:2});
  
  
  
            
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

 PieceG.push({id:"4g",
              piece:[[0,0,"yg","ng","yg",0],
                     ["yg","ng","ng","g","ng","yg"],
                     ["ng","g","g","g","g","ng"],
                     ["yg","ng","ng","ng","ng","yg"]],
              numSquares:5});

 PieceG.push({id:"5g",
             piece:[["yg","ng","yg",0],
                    ["ng","g","ng","yg"],
                    ["ng","g","g","ng"],
                    ["yg","ng","ng","yg"]],
              numSquares:3});

 PieceG.push({id:"6g",
             piece:[[0,"yg","ng","yg",0],
                    [0,"ng","g","ng",0],
                    ["yg","ng","g","ng","yg"],
                    ["ng","g","g","g","ng"],
                    ["yg","ng","ng","ng","yg"]],
             numSquares:5});

 PieceG.push({id:"7g",
             piece:[[0,"yg","ng","yg",0],
                    ["yg","ng","g","ng","yg"],
                    ["ng","g","g","g","ng"],
                    ["ng","g","ng","ng","yg"],
                    ["yg","ng","yg",0,0]],
             numSquares:5});

PieceG.push({id:"8g",
             piece:[["yg","ng","ng","yg"],
                   ["ng","g","g","ng"],
                   ["ng","g","g","ng"],
                   ["yg","ng","ng","yg"]],
             numSquares:4});
PieceG.push({id:"9g",
            piece:[[0,"yg","ng","ng","ng","yg"],
                   ["yg","ng","g","g","g","ng"],
                   ["ng","g","g","ng","ng","yg"],
                   ["yg","ng","ng","yg",0,0]],
            numSquares:5});

PieceG.push({id:"10g",
            piece:[["yg","ng","yg","ng","yg"],
                   ["ng","g","ng","g","ng"],
                   ["ng","g","g","g","ng"],
                   ["yg","ng","ng","ng","yg"]],
            numSquares:5});
PieceG.push({id:"11g",
            piece:[[0,0,"yg","ng","yg"],
                  ["yg","ng","ng","g","ng"],
                  ["ng","g","g","g","ng"],
                  ["ng","g","ng","ng","yg"],
                  ["yg","ng","yg",0,0]],
            numSquares:5});

PieceG.push({id:"12g",
             piece:[[0,0,"yg","ng","yg"],
                   [0,"yg","ng","g","ng"],
                   ["yg","ng","g","g","ng"],
                   ["ng","g","g","ng","yg"],
                   ["yg","ng","ng","yg","ng"]],
           numSquares:5});

PieceG.push({id:"13g",
           piece:[[0,"yg","ng","ng","yg"],
                  ["yg","ng","g","g","ng"],
                  ["ng","g","g","ng","yg"],
                  ["yg","ng","ng","yg",0]],
           numSquares:4});

PieceG.push({id:"14g",
            piece:[["yg","ng","ng","ng","yg"],
                  ["ng","g","g","g","ng"],
                  ["yg","ng","ng","ng","yg"]],
           numSquares:3});
           
PieceG.push({id:"15g",
          piece:[[0,"yg","ng","ng","yg"],
                 ["yg","ng","g","g","ng"],
                 ["ng","g","g","g","ng"],
                 ["yg","ng","ng","ng","yg"]],
          numSquares:5});

PieceG.push({id:"16g",
             piece:[["yg","ng","yg",0,0],
                   ["ng","g","ng",0,0],
                   ["ng","g","ng","ng","yg"],
                   ["ng","g","g","g","ng"],
                   ["yg","ng","ng","ng","yg"]],
          numSquares:5});

PieceG.push({id:"17g",
             piece:[[0,"yg","ng","yg",0],
                 ["yg","ng","g","ng","yg"],
                 ["ng","g","g","g","ng"],
                 ["yg","ng","g","ng","yg"],
                 [0,"yg","ng","yg",0]],
             numSquares:5});
PieceG.push({id:"18g",
         piece:[["yg","ng","yg",0,0],
                ["ng","g","ng","ng","yg"],
                ["ng","g","g","g","ng"],
                ["yg","ng","ng","ng","yg"]],
         numSquares:4});
PieceG.push({id:"19g",
          piece:[["yg","ng","yg"],
                 ["ng","g","ng"],
                 ["yg","ng","yg"]],
          numSquares:1});
PieceG.push({id:"20g",
          piece:[["yg","ng","ng","yg"],
                 ["ng","g","g","ng"],
                 ["yg","ng","ng","yg"]],
          numSquares:2});

export {PieceG};
export {PieceR};