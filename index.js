function generate(){                             //to generate random colours in random circles
    document.getElementById("circle1").style.backgroundColor = "#bbb"; //these will help to default(grey) the circle area after execution
    document.getElementById("circle2").style.backgroundColor = "#bbb"; 
    document.getElementById("circle3").style.backgroundColor = "#bbb";
    document.getElementById("displayArea1").innerHTML = ""
    document.getElementById("displayArea2").innerHTML = ""
    document.getElementById("displayArea3").innerHTML = ""

 


    var val = Math.floor(Math.random()*3 + 1); //input of random value to get any number among 1,2,3

    var chang1 = "displayArea" + val; //getting displayarea id foramat with help of "val" {displayArea1, displayArea2, displayArea3}
    var value2 = "circle" + val;      //getting circlcle id format wit help of "val" {circle1, circle2, circle3} 
    const randomColor = Math.floor(Math.random()*16777215).toString(16); //getting random hexa color value
    document.getElementById(value2).style.backgroundColor = "#" + randomColor;//applying(changing) color to random circle
    
    document.getElementById(chang1).innerHTML = "#" + randomColor;// showing respective hexa color value
  }



// function cfun(){                                            //to copy the recpective color value
//     if(document.getElementByClassName("copy1").id === "c1"){//condition for getting block with id c1
//         var copyText = document.getElementById("displayArea1");//copying first circle value
//         navigator.clipboard.writeText(copyText.innerHTML);

//     }else if(document.getElementByClassName("copy2").id === "c2"){
//         var copyText = document.getElementById("displayArea2");//copying second circle value
//     navigator.clipboard.writeText(copyText.innerHTML);

//     }else if(document.getElementByClassName("copy3").id === "c2"){
//         var copyText = document.getElementById("displayArea3");//copying third circle value
//     navigator.clipboard.writeText(copyText.innerHTML);
//     }
// }

function c1fun(){
    var copyText = document.getElementById("displayArea1");
    navigator.clipboard.writeText(copyText.innerHTML)
}
function c2fun(){
    var copyText = document.getElementById("displayArea2");
    navigator.clipboard.writeText(copyText.innerHTML);
}
function c3fun(){
    var copyText = document.getElementById("displayArea3");
    navigator.clipboard.writeText(copyText.innerHTML);
}