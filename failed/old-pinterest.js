var company = "Pinterest";
// var job = $(".app-title").text().split(",")[0];
var linkToJob = $("#grnhse_app iframe").attr('src');
console.log(linkToJob);


chrome.runtime.sendMessage({"message": "open_new_tab", "url": linkToJob});

fetch(chrome.extension.getURL("./data.json"))
  .then((resp) => resp.json())
  .then(function (jsonData) {
    generate(jsonData);
    // window.alert(jsonData);
  });

var generate = function (data) {
  console.log(data);
  var NAME = data.name;
  var EMAIL = data.email;
  var PHONE = data.phone;
  var CURRENT_COMPANY = data.company;
  var SKYPE = data.links.skype;
  var LINKEDIN = data.links.linkedin;
  var GITHUB = data.links.github;
  var PORTFOLIO = data.links.portfolio;
//   var COVER_LETTER = data.coverLetter.replace(/\${name}/gi, NAME).replace(/\${company}/gi, company).replace(/\${job}/gi, job);

// window.alert("kli"+ LINKEDIN)
  // console.log($('input[name="job_application[first_name]"]'));

  $("input[name='job_application[first_name]']").val(NAME);
  // $('input[name="job_application[last_name]"]').val(NAME.split[1]);
  // $('input[name="job_application[email]"]').val(EMAIL);
  // $('input[name="job_application[phone]"]').val(PHONE);
  // $('input[autocomplete="custom-question-education-last-university-attended"]').val(PHONE);
  // $("input[autocomplete='custom-question-linkedin-profile-url']").val(LINKEDIN);
//   $('input[name="org"]').val(CURRENT_COMPANY);
//   $('input[name="urls[Skype Username]"]').val(SKYPE);
//   $('input[name="urls[LinkedIn]"]').val(LINKEDIN);
//   $('input[name="urls[Github ]"]').val(GITHUB);
//   $('input[name="urls[Portfolio]"]').val(PORTFOLIO);
//   $('textarea[name="comments"]').val(COVER_LETTER);

//   data.disability.forEach(function (entry) {
//     // console.log(entry);
//     var value = disability_keys[entry];
//     $(`.application-question :nth-child(11) input[value='${value}']`).prop("checked", true);
//   });

//   var genderid = genderid_keys[data.genderID[0]];
//   console.log('`$(\'input[value=' + genderid);
//   $(`input[value='${genderid}']`).prop("checked", true);

//   var sexualOrientation = sexualOrientation_keys[data.sexualOrientation[1]];
//   $(`input[value='${sexualOrientation}']`).prop("checked", true);
};

// for i in data.disability

// $('input[value="None; I don’t have a disability"]')

// $('.myCheckbox').prop('checked', true);
