 // Handle entry form submission
 $(document).ready(function () {
     $("#entryForm").submit(function (e) {
         e.preventDefault();

         // You can add your logic for handling the form submission here
         // For example, you can use AJAX to send the data to a server

         // Update modal content to "Thank you" message
         $("#entryFormContent").html("<p>Thank you for your entry!</p>");

         // Optionally, you can close the modal after submission
         // $("#entryModal").modal("hide");
     });
 });



 //  Plans

 // Handle basic plan form submission
 $(document).ready(function () {
     $("#basicPlanForm").submit(function (e) {
         e.preventDefault();
         $("#basicPlanFormContent").html("<p>Thank you for your entry!</p>");
     });
 });

 // Handle personal plan form submission
 $(document).ready(function () {
     $("#personalPlanForm").submit(function (e) {
         e.preventDefault();
         $("#personalPlanFormContent").html("<p>Thank you for your entry!</p>");
     });
 });

 // Handle personal+ plan form submission
 $(document).ready(function () {
     $("#personalPlusPlanForm").submit(function (e) {
         e.preventDefault();
         $("#personalPlusPlanFormContent").html("<p>Thank you for your entry!</p>");
     });
 });