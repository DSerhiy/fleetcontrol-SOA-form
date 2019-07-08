Date.prototype.toString = function(div = '.') {
  const date = this.getDate() < 10 ? `0${this.getDate()}`: this.getDate();
  const month = this.getMonth() < 10 ? `0${this.getMonth() + 1}`: this.getMonth() + 1;
  return date + div + month + div + this.getFullYear();
}

function formatNumber(number) {
  strNum = (Math.round(number * 100) / 100).toString();
  
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

const date = '2019-05-01';

const jsDate = new Date(date);
jsDate.setDate(jsDate.getDate() - 1);
console.log(jsDate.toString());