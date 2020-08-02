var COMPANY = "Shopify";
var JOB = $(".app-title").text();

chrome.storage.sync.get(null, function (items) {
  console.log("items ", items);
  generate(items);
});

// fetch(chrome.extension.getURL("./data.json"))
//   .then((resp) => resp.json())
//   .then(function (jsonData) {
//     generate(jsonData);
//   });

var generate = function (data) {
  var FIRSTNAME = data.firstname;
  var LASTNAME = data.lastname;
  var NAME = FIRSTNAME + " " + LASTNAME;
  var EMAIL = data.email;
  var PHONE = data.phone;
  var CURRENT_COMPANY = data.company;
  var LINKEDIN = data.linkedin;
  var PORTFOLIO = data.portfolio;
  var COVER_LETTER = data.coverletter.replace(/\${NAME}/gi, NAME).replace(/\${COMPANY}/gi, COMPANY).replace(/\${JOB}/gi, JOB).replace(/\${PHONE}/gi, PHONE).replace(/\${EMAIL}/gi, EMAIL);

  $("input[name='job_application[first_name]']").val(FIRSTNAME);
  $("input[name='job_application[last_name]']").val(LASTNAME);
  $("input[name='job_application[email]']").val(EMAIL);
  $("input[name='job_application[phone]']").val(PHONE);
  
  $("textarea[name='job_application[cover_letter_text]']").css({display: "inline-block"});
  $("textarea[name='job_application[cover_letter_text]']").val(COVER_LETTER);

  $("input[autocomplete='custom-question-linkedin-profile']").val(LINKEDIN);

  $("input[autocomplete='custom-question-website']").val(PORTFOLIO);
  
  $("input[autocomplete='custom-question-current-or-most-recent-company']").val(CURRENT_COMPANY);
};
