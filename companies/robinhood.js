var company = "Robinhood";
var job = $(
  ".app-title"
).text().split(",")[0];

// var postingID = currentURL.match(/positions\/[0-9]*\//g); // airbnb


  var data = getData({ company, job }, autoFill);

  function autoFill(data) {
    console.log(data.COVERLETTER);
    $("#first_name").val(data.FIRSTNAME);
    $("#last_name").val(data.LASTNAME);
    $("#email").val(data.EMAIL);
    $("#phone").val(data.PHONE);
  
    $("a[data-source='attach']")[0].click();
    $('input[name="job_application[answers_attributes][0][text_value]"]').val(data.PORTFOLIO);
    
    $("#cover_letter_text").val(data.COVERLETTER);
  }