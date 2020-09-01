var company = "Twilio";
var job = $(".app-title").text();

// trigger the resume file picker
$("input[name='resume']").click();

var data = getData({ company, job }, autoFill);

function autoFill(data) {
  $("input[name='first_name'").val(data.FIRSTNAME);
  $("input[name='last_name'").val(data.LASTNAME);
  $("input[name='email'").val(data.EMAIL);
  $("input[name='phone'").val(data.PHONE);
  $("input[name='location'").val(data.LOCATION);
  
  $("textarea[name='job_application[cover_letter_text]']").css({display: "inline-block"});
  $("textarea[name='job_application[cover_letter_text]']").val(data.COVER_LETTER);

  $("input[autocomplete='custom-question-linkedin-profile']").val(data.LINKEDIN);

  $("input[autocomplete='custom-question-website']").val(data.PORTFOLIO);
  
  $("input[autocomplete='custom-question-current-or-most-recent-company']").val(data.CURRENT_COMPANY);
  
};



