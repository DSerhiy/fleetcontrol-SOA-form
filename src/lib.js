export default {
  formatNum(number, acc) {

    if(number === null) 
      return null;

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
  const month = this.getMonth() < 9 ? `0${this.getMonth() + 1}`: this.getMonth() + 1;
  return date + div + month + div + this.getFullYear();
}

Date.prototype.toISOuString = function() {
  const date = this.getDate() < 10 ? `0${this.getDate()}`: this.getDate();
  const month = this.getMonth() < 9 ? `0${this.getMonth() + 1}`: this.getMonth() + 1;
  return this.getFullYear()  + '-' + month + '-' + date;
}
