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



 //  Plans ----------------------------------------------------------

 // Handle basic plan form submission
 $(document).ready(function () {
     $("#basicPlanForm").submit(function (e) {
         e.preventDefault();
         $("#basicPlanFormContent").html("<p>Thank you for contacting us! We will contact you as soon as possible.</p>");
     });
 });

 // Handle personal plan form submission
 $(document).ready(function () {
     $("#personalPlanForm").submit(function (e) {
         e.preventDefault();
         $("#personalPlanFormContent").html("<p>Thank you for contacting us! We will contact you as soon as possible.</p>");
     });
 });

 // Handle personal+ plan form submission
 $(document).ready(function () {
     $("#personalPlusPlanForm").submit(function (e) {
         e.preventDefault();
         $("#personalPlusPlanFormContent").html("<p>Thank you for contacting us! We will contact you as soon as possible.</p>");
     });
 });


 //  submition ----------------------------------------------------
 // Function to validate input and show modal


 // Function to validate input and show modal
 function validateAndSignUp() {
     var nameInput = $("#name");
     var emailInput = $("#email");
     var name = nameInput.val();
     var email = emailInput.val();

     // Basic name validation
     if (name.trim() === "") {
         nameInput.addClass("is-invalid");
         return;
     }

     // Basic email validation
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         emailInput.addClass("is-invalid");
         return;
     }

     // Clear validation status
     nameInput.removeClass("is-invalid");
     emailInput.removeClass("is-invalid");

     // Your additional validation logic goes here

     // If all validations pass, show the thank you modal
     $("#thankYouModal").modal("show");
 }