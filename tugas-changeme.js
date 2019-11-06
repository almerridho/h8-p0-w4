function changeMe(arr) {
    for (i = 0; i < arr.length; i++){
        var judul = i+1 + '.' + arr[i][0] + ' ' + arr[i][1]
        var orang = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3]
        }
        if(arr[i][3] === undefined){
            orang.age = 'Invalid Birth Year';
        }
        console.log(judul)
        console.log(orang)        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }