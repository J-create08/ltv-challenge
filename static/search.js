var searchEmail = (email) =>{
    
        $.ajax({
            type: "GET",
            url: "https://ltv-data-api.herokuapp.com/api/v1/records.json?email="+email,
            dataType: "json",

            beforeSend: function(){
                $("#loadingGif").show()
            },

            complete: function(){
                $("#loadingGif").hide()
            },

            success: function(data){
                var responseCount = Object.keys(data).length
                hideError()
                if (responseCount == 0){
                    hideElements()
                    $("#noResults").show() 
                    $("#userCard").hide() 
                    $("#searchTitle").text("Can't Find The Right Person?")
                    $("#searchStart").text("Try Again")
                    $("#searchBody").text("- Make a new search")
                    $('#searchBar').val('')
                } else {
                    $("#userName").text(data['first_name']+" "+ data['last_name'])
                    $('#userDescription').text(data['description'])
                    $("#userAddress").text(data['address'])
                    $('#userEmail').text(data['email'])
                    var p_numbers = data['phone_numbers']
                    for (var i in p_numbers){
                        phone_n = p_numbers[i]
                        formatted_number = "("+phone_n.substring(0, 3)+") "+phone_n.substring(3, 6)+"-"+phone_n.substring(6, 10);
                        $("#phoneNumbers").append('<p class="small text-primary mb-0">'+formatted_number+'</p>')
                    }
                    var relatives = data['relatives']
                    for (var n in relatives){
                        $("#userRelatives").append('<p class="small mb-0">'+relatives[n]+'</p>')
                    }
                    $("#userCard").show()
                    hideElements()
                    $("#noResults").hide()
                    $("#searchTitle").text("Can't Find The Right Person?")
                    $("#searchStart").text("Try Again")
                    $("#searchBody").text("- Make a new search")
                    $('#searchBar').val('')
                }
                
            },

        })
}

var hideElements = () =>{
    $("#mainContainer").hide()
    $("#infoSection").hide() 
}

var hideError = () => {
    $("#searchBar").removeClass("error")
    $("#errorSpan").hide()
}


$(document).ready(function(){
    $(document).on('click', '#goButton', function(){
        const emailInput = $("#searchBar")[0].value;
        if (emailInput.indexOf("@") != -1 && emailInput.indexOf(".") != -1){
            searchEmail(emailInput)
        } else {
            $("#searchBar").addClass("error")
            $("#errorSpan").show()
        }
        
    })
    
});