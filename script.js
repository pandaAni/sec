$(document).ready(function () {
    // $("a").hover(function () {
    //     alert("hovered")
    // },
    //     function () {
    //         alert("hovered out")
    //     }

    // )
    // $("a").focus(function(){
    //     alert("focused")
    // })
    $("a").click(function(){
        alert("anchor tag clicked")
    })
    $("a").click(function(event){
        event.preventDefault()
    })
})

// $(docuemnt).ready(function(){
//     $("a").click(function(event){
//         event.preventDefault();
//     })
// })