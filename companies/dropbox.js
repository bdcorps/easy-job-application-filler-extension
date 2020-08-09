var company = "Dropbox";
var job = $(".jc01-title__title h1").text();

// trigger the resume file picker
$("input[name='resume']").click();

var data = getData({ company, job }, autoFill);

function autoFill(data) {
  console.log(data);
  $('input[name="first_name"]').val(data.FIRSTNAME);
  $('input[name="last_name"]').val(data.LASTNAME);
  $('input[name="email"]').val(data.EMAIL);
  $('input[name="phone"]').val(data.PHONE);

  // trigger the paste cover letter
  $("a[data-option='paste']")[1].click();
  $('textarea[name="cover_letter_text"]').val(data.COVERLETTER);
}
