var COMPANY = "Twilio";
var JOB = $(".app-title").text();


chrome.storage.sync.get(null, function (items) {
  console.log("items ", items);
  $("#resume-upload-input").click();
  generate(items);
});

var generate = function (data) {
  console.log("runnig twitter", data);
  var FIRSTNAME = data.firstname;
  var LASTNAME = data.lastname;
  var NAME = FIRSTNAME + " " + LASTNAME;
  var EMAIL = data.email;
  var PHONE = data.phone;
  var LOCATION = data.location;
  var CURRENT_COMPANY = data.company;
  var SKYPE = data.skype;
  var LINKEDIN = data.linkedin;
  var GITHUB = data.github;
  var PORTFOLIO = data.portfolio;
  var COVER_LETTER = data.coverletter.replace(/\${NAME}/gi, NAME).replace(/\${COMPANY}/gi, COMPANY).replace(/\${JOB}/gi, JOB);

  $("input[name='job_application[first_name]']").val(FIRSTNAME);
  $("input[name='job_application[last_name]']").val(LASTNAME);
  $("input[name='job_application[email]']").val(EMAIL);
  $("input[name='job_application[phone]']").val(PHONE);
  $("input[name='job_application[location]']").val(LOCATION);
  
  $("textarea[name='job_application[cover_letter_text]']").css({display: "inline-block"});
  $("textarea[name='job_application[cover_letter_text]']").val(COVER_LETTER);

  $("input[autocomplete='custom-question-linkedin-profile']").val(LINKEDIN);

  $("input[autocomplete='custom-question-website']").val(PORTFOLIO);
  
  $("input[autocomplete='custom-question-current-or-most-recent-company']").val(CURRENT_COMPANY);


  
};
