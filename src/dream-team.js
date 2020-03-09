module.exports = function createDreamTeam(members) {
  let arr=[];
  if (!Array.isArray(members)) {
    return false;
  }
  for(let i=0;i<members.length;i++){
    if(typeof members[i]!=="string")continue;
    else arr.push(members[i].trim()[0].toUpperCase());
  }
  
  return arr.sort().join('');
 
}