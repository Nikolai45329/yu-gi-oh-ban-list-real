const Max = 622;
let count = 5;
const CounterDisplay = document.getElementById="count";

function CalculateCount(){
    count = 0;
    for(let i = 0; i <= 14; i++){
        let a = "obtained"+i;
        console.log(a);
        let element = document.getElementById("a");
        
        if(element.checked){
            count++;
        }

    }

    function GetImage(){
    }
    CounterDisplay.innerText = count.toString;
}