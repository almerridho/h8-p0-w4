function angkaPrima(num){
    if(num % num === 0 && num % 2 > 0 && num % 3 > 0 && num & 5 > 0){
      console.log('true')
    }else {
      console.log('false')
    }
}


console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false 