//calculate tip

function calculateTip(){
   var billAmt = document.getElementById("billamt").value;
   var serviceQual = document.getElementById("serviceQual").value;
   var numOfPeople = document.getElementById("peopleamt").value;

//validate if values already given by user
    if(billAmt === "" || serviceQual == 0){
      alert("Please enter values");
      return;
    }
//check num of people empty or less than one
    if( numOfPeople ==="" || numOfPeople <=1){
       numOfPeople = 1;
       document.getElementById("each").style.display = "none";
    }
    else{
       document.getElementById("each").style.display = "block";
    }


//claculate tip
   var total = (billAmt*serviceQual)/ numOfPeople;
   total = Math.round(total);
   total = total.toFixed(2);

  //Display the tip
  document.getElementById("container").style.height = "560px";
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  


}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
    calculateTip();
}










