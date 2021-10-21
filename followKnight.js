  //------------making Chess borad----------------------------------//
   function makeChessBoard(size){
    let board = [];   
 
    for (let i = 0 ; i < size ; i++){
        var row = [];
 
     for (let j = 0 ; j < size ; j++){
          
          row.push(0)
        }
       board.push(row)
    }
 
     return board;
   }

   //-----------------counting space visited----------------------//

     function countSpace(board){
         let count = 0 ;

         for (let i = 0 ; i < 10 ; i++){
             for (let j = 0 ; j < 10 ; j++){

                  if (board[i][j] === 1 )
                    { count++ }
             }
         }

         return count;
     }

   

//------------ input and execution of main function --------------------//

  function runProgram(input) {
 
  let [i,j,n] = input.trim().split(" ").map(Number);
  // console.log(i,j,n);

  var board = makeChessBoard(10);
 // console.log(makeChessBoard(10));

    var total_count = 0 ;

    var count = 0 ;

    knightMoves(i-1,j-1,n) ;

  //------                          --------------//
    function knightMoves(i,j,steps){      

        if ( i > 9  ||  i < 0   ||  j < 0  ||  j > 9)  { return}
  
        if (steps === 0)
           { 
             board[i][j] = 1 ;            
             return;
           }
  
  
        knightMoves(i-1,j-2,steps-1)   // left side moves
        knightMoves(i+1,j-2,steps-1);
  
        knightMoves(i-1,j+2,steps-1)   // right side moves
        knightMoves(i+1,j+2,steps-1);
  
        knightMoves(i-2,j+1,steps-1)   // top side moves
        knightMoves(i-2,j-1,steps-1);
  
        knightMoves(i+2,j+1,steps-1)   // bottom side moves
        knightMoves(i+2,j-1,steps-1);   
  
     }

    //console.log (board)

    console.log(countSpace(board));
    
 
}


if (process.env.USERNAME === "Cvam's PC") {
  runProgram(`4 7 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
  });
}