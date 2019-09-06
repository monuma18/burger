// Make sure we wait to attach our handlers until the DOM is fully loaded.

  
 
  $(".btn-success").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");


    var newSleepState = {
      devoured: devoured
    };

    alert(devoured)
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function(data) {
        // console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

$("#addBurger").on("click", function(event) {
  console.log('ne bugsvs');

    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    alert("hi")
    var bName = $("#burger").val().trim()

    var newBurger = {
      burgerName: bName
      // sleepy: $("[name=sleepy]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 
