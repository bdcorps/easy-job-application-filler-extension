var company = "Shopify";
var job = $(".posting-header h2").text().split("-")[0];

// trigger the resume file picker
$("#resume-upload-input").click();

var data = getData({ company, job }, autoFill);

function autoFill(data) {
  console.log(data.COVERLETTER);
  $('input[name="name"]').val(data.NAME);
  $('input[name="email"]').val(data.EMAIL);
  $('input[name="phone"]').val(data.PHONE);
  $('input[name="org"]').val(data.CURRENT_COMPANY);
  $('input[name="urls[Skype Username]"]').val(data.SKYPE);
  $('input[name="urls[LinkedIn]"]').val(data.LINKEDIN);
  $('input[name="urls[Github ]"]').val(data.GITHUB);
  $('input[name="urls[Portfolio]"]').val(data.PORTFOLIO);
  $('textarea[name="comments"]').val(data.COVERLETTER);
}
