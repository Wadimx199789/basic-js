module.exports = function countCats(matrix){
   let count=0
   if(matrix.length==0){
      return count;
   }
   else{
      for(let i=0;i<matrix.length;i++){
         for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==="^^"){
               count+=1;
            }
         }
      }
     return count;
   }
   
   }
   
