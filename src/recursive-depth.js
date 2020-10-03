module.exports = class DepthCalculator {
    calculateDepth(arr) {
      
       if(!Array.isArray(arr)) throw 'Not implemented';
       let count=1;
       for(let i=0;i<arr.length;i++){
           if(Array.isArray(arr[i])){
               const maxvalue = this.calculateDepth(arr[i]) +1;
               if(maxvalue>count){
                   count=maxvalue;
               }
               
           }
           
       }
       return count 
    
    }
};