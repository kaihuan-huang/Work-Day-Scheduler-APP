
// handle displaying the time
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

var saveButton = $('.saveBtn ');

//create a function to handle save button
function handleSaveButton(){
    saveButton.on("click", function(){
          //get value from time-block's Input
        // var textInputEl = setAttribute("class",".text-input");
        // var timeEl = setAttribute("class","hour");
        // var textInput = $(this).textInputEl.text();
        // var time = $(this).timeEl.val();

        

        console.log(textInput);
        console.log(time);


        
        //save input in the local storage
        localStorage.setItem(time, textInput);

        $("#timeAt8.input").val(localStorage.getItem);
        $("#timeAt9.input").val(localStorage.getItem);
        $("#timeAt10.input").val(localStorage.getItem);
    });

   

}

function timeColor(){

    //get current hour
    var timeNow = moment().hours();
    console.log(timeNow);
    //loop over the time block
    $('.time-block').each(function(){
        var eachBlockTime = parseInt($(this).attr("id").split("timeAt")[1]);
        console.log("eachBlockTime" ,eachBlockTime);

        if (eachBlockTime > timeNow){
            // $(this).removeClass('future');
            // $(this).removeClass('present');
            // $(this).addClass('past');
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        }else if (eachBlockTime === timeNow){
            // $(this).removeClass('future');
            $(this).addClass('present');
            // $(this).removeClass('past');
        }else{
            // $(this).removeClass('future');
            // $(this).removeClass('present');
            $(this).addClass('past');
        }
    })
}

timeColor();
