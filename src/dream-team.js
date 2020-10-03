module.exports = function createDreamTeam(members) {
  let arr=[];
  if (!Array.isArray(members)) {
    return false;
  }
  for(el of members){
    if(typeof(el) !=='string'){
      continue
    }
    else arr.push(el.trim().substr(0,1).toUpperCase())
  }
  return arr.sort().join('');
 
}