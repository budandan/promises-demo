$(document).ready(function() {   
    var output1 = $('#output1');
    var output2 = $('#output2');
    var output3 = $('#output3');

    $('#doSomething').on('click', function() {
        $.ajax({
            type: "GET",
            url: "data/path1.json",
            success: function(response) {
                output1.html('<img src="' + response.path + '"/>');
                $.ajax({
                    type: "GET",
                    url: "data/path2.json",
                    success: function(response) {
                        output2.html('<img src="' + response.path + '"/>');
                        $.ajax({
                            type: "GET",
                            url: "data/path3.json",
                            success: function(response) {
                                output3.html('<img src="' + response.path + '"/>');
                            },
                            error: function(error) {
                                console.log(error);
                            }
                        });
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});





// $.get("data/path1.json").then(function(response) {
//     output1.html('<img src="' + response.path + '"/>');
//     return $.get("data/path2.json");
// }).catch(function(error) {
//     console.log(error);
// }).then(function(response) {
//     output2.html('<img src="' + response.path + '"/>');
//     return $.get("data/path3.json");
// }).catch(function(error) {
//     console.log(error);
// }).then(function(response) {
//     output3.html('<img src="' + response.path + '"/>');
// }).catch(function(error) {
//     console.log(error);
// });