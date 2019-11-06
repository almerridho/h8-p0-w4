function ubahHuruf(kata) {
    var newKata = '';
    for (var i = 0; i < kata.length; i++) {
        if (96 < kata.charCodeAt(i) && kata.charCodeAt(i) < 123) {
            newKata += String.fromCharCode(kata.charCodeAt(i) + 1);
        }else if (kata.charCodeAt(i) == z){
            newKata += 'a'
        }
    }
    return newKata;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

