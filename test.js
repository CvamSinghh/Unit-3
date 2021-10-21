function runProgram(input) {
  
   var n = +input;
   console.log(n);

   var count = 0 ;
   var numberOfExecution = 0 ;
   stepsCount(n);
   

   function stepsCount(n){      
     numberOfExecution++;
     console.log("numberOfExecution =",numberOfExecution);


    if ( n < 0 ) {  return }

    if ( n === 0 )
       { count++;
          return}

         stepsCount(n-3);        
         stepsCount(n-2);
         stepsCount(n-1);
     


   }
   
     console.log(count);
    //console.log(numberOfExecution);   
 
}


if (process.env.USERNAME === "Cvam's PC") {
  runProgram(`10`);
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