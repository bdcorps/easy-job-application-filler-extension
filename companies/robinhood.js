var company = "Robinhood";
var job = $(
  ".app-title"
).text().split(",")[0];

var currentURL = window.location.href;
// var postingID = currentURL.match(/positions\/[0-9]*\//g); // airbnb
var postingID = (/gh_jid=([0-9]*)/g).exec(currentURL)[1]; 

console.log(postingID[1]);

var GHPostingURL = `https://boards.greenhouse.io/embed/job_app?for=robinhood&token=${postingID}` 

console.log("response.message", GHPostingURL);

if (GHPostingURL){
  chrome.runtime.sendMessage(
    { message: "open_new_tab", url: GHPostingURL },
    (response) => {
      console.log(response.message);
    }
  );
}


if (postingID.length==0){

  var data = getData({ company, job }, autoFill);

  function autoFill(data) {
    console.log(data.COVERLETTER);
    $("#first_name").val(data.FIRSTNAME);
    $("#last_name").val(data.LASTNAME);
    $("#email").val(data.EMAIL);
  //   $("#phone").val(data.PHONE);
  
  //   $("a[data-source='attach']")[0].click();
  //   $('input[name="job_application[answers_attributes][0][text_value]"]').val(data.PORTFOLIO);
    
  //   $("#cover_letter_text").val(data.COVERLETTER);
  }
  
}