export default {
  formatNum(number, acc) {

    let strNum = (Math.round(number * 100) / 100).toString();
  
    if(!strNum.includes('.'))
      strNum += '.00';
  
    if(strNum.search(/\.\d$/) !== -1)
      strNum += '0'
  
    for(let i = strNum.length - 7; i > -1; i -= 3 )
      strNum = strNum.slice(0, i + 1) + ' ' + strNum.slice(i + 1);
  
    return strNum;    
  }
}

Date.prototype.toString = function(div = '.') {
  const date = this.getDate() < 10 ? `0${this.getDate()}`: this.getDate();
  const month = this.getMonth() < 10 ? `0${this.getMonth()}`: this.getMonth();
  return date + div + month + div + this.getFullYear();
}
