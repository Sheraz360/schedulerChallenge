$("#currentDay").text(moment().format("dddd - DD/MMMM/YYYY h:mma"))

$(".time-block").each(function() {
    var timeBlock = parseInt($(this).attr("id").split("-")[1])
    var currentTime = moment().hours()
    if(timeBlock < currentTime) {
        $(this).addClass("past")
    }
    else if(timeBlock === currentTime) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
})

$(".saveBtn").click(function() {
    var value = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id")
    localStorage.setItem(hour,value)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))

