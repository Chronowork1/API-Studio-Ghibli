$(document).ready(function(){
    let ghibliApi = "https://ghibliapi.herokuapp.com/films"
    let inputVal;
    $("#searchButton").click(function(){
        function getApi(){
            //return $("#root").append(inputVal)
            $.ajax({
                url: ghibliApi,
                type: "GET",
                success: function(response){
                    inputVal = $("#searchInput").val();
                    let a = "https://ghibliapi.herokuapp.com/films/search?q="+inputVal
                    console.log(a);
                    for(let i =0; i< response.length; i++){
                        $("#root").append("<h1>"+response[i].title+"</h1>")
                        $("#root").append("<p>"+response[i].description+"</p>")
                    }
                }
            })
        }
        getApi();
    })
})