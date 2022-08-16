function changeColor(){

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
    // Used like so
    var arr = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    shuffle(arr);
    arr.splice(6,10);
    let arrStr = arr.join("");
    let h4div = document.getElementsByClassName("gapDiv");
    h4div[0].style.backgroundColor = `#${arrStr}`;
    h4div[1].style.backgroundColor = `#${arrStr}`;
    h4div[2].style.backgroundColor = `#${arrStr}`;
    h4div[3].style.backgroundColor = `#${arrStr}`;
    h4div[4].style.backgroundColor = `#${arrStr}`;
    h4div[5].style.backgroundColor = `#${arrStr}`;

}

setInterval(changeColor,1000);
function shop(){
  window.open("../HTML/shop.html","_blank");
}