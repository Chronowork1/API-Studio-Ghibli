$(document).ready(function(){
    function getApi(){
        let ghibliApi = "https://ghibliapi.herokuapp.com/films"
        $.ajax({
            url: ghibliApi,
            type: "GET",
            success: function(response){
                for(let i =0; i< response.length; i++){
                    $("#root").append("<h1>"+response[i].title+"</h1>")
                    $("#root").append("<p>"+response[i].description+"</p>")
                }
            }
        })
    }
    getApi();
})