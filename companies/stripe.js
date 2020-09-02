var company = "Stripe";
var job = $(
  "common-SectionTitle Helm__text--slate1 JobApplication__title h1"
).text();

var embedURL = $("iframe").attr("src");

if (embedURL){
  chrome.runtime.sendMessage(
    { message: "open_new_tab", url: embedURL },
    (response) => {
      console.log(response.message);
    }
  );
}

var data = getData({ company, job }, autoFill);

function autoFill(data) {
  console.log(data.COVERLETTER);
  console.log("running", $("#first_name"));
  $("#first_name").val(data.FIRSTNAME);
  $("#last_name").val(data.LASTNAME);
  $("#email").val(data.EMAIL);
  $("#phone").val(data.PHONE);

  $("a[data-source='attach']")[0].click();
  $('input[name="job_application[answers_attributes][0][text_value]"]').val(data.PORTFOLIO);
  
  $("#cover_letter_text").val(data.COVERLETTER);
}
