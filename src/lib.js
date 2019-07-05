export default {
  formatNum(number) {
    let strNum = (Math.round(number * 100) / 100).toString();
  
    if(strNum.includes('.'))
      strNum = strNum.replace('.', ',');
    else   
      strNum += ',00';
  
    if(strNum.search(/\,\d$/) !== -1)
      strNum += '0'
  
    for(let i = strNum.length - 7; i > -1; i -= 3 )
      strNum = strNum.slice(0, i + 1) + ' ' + strNum.slice(i + 1);
  
    return strNum;    
  }
}