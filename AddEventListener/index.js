// normal JS
// document.querySelector("button").addEventListener("click", function(){
//     document.querySelector("h1").innerHTML = "You already click at the button"

// })

// Jquery ar maddomy

// $("button").click(function (){
//     $("h1").text("Click Done");
// })
// $("button").click(function (){
//     $("h1").toggleClass("style1");
// })

// 3 buttons with J.s

// var totalButtons = document.querySelectorAll(".myButton").length;

// for (i =0; i<totalButtons; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function (){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + "is clicked";
//     })
// }

// 3 buttons with Jquery

$(".myButton").click( function (){
            var value = this.innerHTML;
            $("h1").text(value + " is clicked")
        })

   // 3 buttons with Jquery on     
$(".myButton").on( "mouseover",function (){
            var value = this.innerHTML;
            $("h1").text(value + " is clicked")
        })