var scores=[60,50,60,58,54,54,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
var highscore=0;

var output;

for(var i=0;i<scores.length;i++){
    output="Bubble solution #"+i+"score"+scores[i];
    console.log(output);
    if (scores[i]>highscore) {
        highscore=scores[i];
    }
}

console.log("Bubbles tests:"+i);
console.log("Highest bubbles score:"+highscore);

var bestSolution=[];
for ( i = 0; i < scores.length; i++) {
if(scores[i]==highscore){
    bestSolution.push(i);
}    


}
console.log("Solution with the highest score:"+bestSolution);