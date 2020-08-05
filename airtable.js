var company = "Airtable";
var job = $(".app-title").text();

// trigger the resume file picker
// jquery version doesn't work properly
document.querySelectorAll('[data-source="attach"]')[0].click();

var data = getData({ company, job }, autoFill);

function autoFill(data) {
  $("input[name='job_application[first_name]']").val(data.FIRSTNAME);
  $("input[name='job_application[last_name]']").val(data.LASTNAME);
  $("input[name='job_application[email]']").val(data.EMAIL);
  $("input[name='job_application[phone]']").val(data.PHONE);
  
  $("textarea[name='job_application[cover_letter_text]']").css({display: "inline-block"});
  $("textarea[name='job_application[cover_letter_text]']").val(data.COVERLETTER);

  $("input[autocomplete='custom-question-linkedin-profile']").val(data.LINKEDIN);

  $("input[autocomplete='custom-question-website']").val(data.PORTFOLIO);
  
  $("input[autocomplete='custom-question-current-or-most-recent-company']").val(data.CURRENT_COMPANY);
}

