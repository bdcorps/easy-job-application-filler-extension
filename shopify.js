var company = "Shopify";
var job = $(".posting-header h2").text().split("-")[0];

// disability_keys = {
//   NONE: "None; I don’t have a disability",
//   MENTAL_HEALTH: "Mild or severe mental health disabilities or conditions",
//   PHYSICAL_HEALTH: "Mild or severe physical disabilities or conditions",
//   DECLINE: "Prefer not to say",
// };
// genderid_keys = {
//   DECLINE: "Prefer not to say",
//   FEMALE_CIS: "Woman (cis)",
//   FEMALE_TRANS: "Woman (trans)",
//   MALE_CIS: "Man (cis)",
//   MALE_TRANS: "Man (trans)",
//   GENDERQUEER: "Genderqueer",
//   NON_BINARY: "Non-binary",
//   TWO_SPIRIT: "Two-Spirit",
//   AGENDER: "Agender",
//   NOT_LISTED: "Not listed",
// };

// sexualOrientation_keys = {
//     DECLINE: "Prefer not to say",
//   HETEROSEXUAL:"Heterosexual (straight)",
//   BISEXUAL:"Bisexual",
//   GAY:"Gay",
//   PANSEXUAL:"Pansexual",
//   ASEXUAL:"Asexual",
//   QUEER:"Queer",
//   LESBIAN:"Lesbian",
//   UNDECIDED:"Undecided",
//   NOT_LISTED:"Not listed",
//   };


// fetch(chrome.extension.getURL("./data.json"))
//   .then((resp) => resp.json())
//   .then(function (jsonData) {
//     generate(jsonData);
//   });

chrome.storage.sync.get(null, function (items) {
  console.log("items ", items);
  $("#resume-upload-input").click();
  generate(items);
});


var generate = function (data) {
  console.log(data);
  var NAME = data.name;
  var EMAIL = data.email;
  var PHONE = data.phone;
  var CURRENT_COMPANY = data.company;
  var SKYPE = data.skype;
  var LINKEDIN = data.linkedin;
  var GITHUB = data.github;
  var PORTFOLIO = data.portfolio;
  var COVER_LETTER = data.coverletter.replace(/\${NAME}/gi, NAME).replace(/\${COMPANY}/gi, company).replace(/\${job}/gi, job).replace(/\${PHONE}/gi, PHONE).replace(/\${EMAIL}/gi, EMAIL);

  $('input[name="name"]').val(NAME);
  $('input[name="email"]').val(EMAIL);
  $('input[name="phone"]').val(PHONE);
  $('input[name="org"]').val(CURRENT_COMPANY);
  $('input[name="urls[Skype Username]"]').val(SKYPE);
  $('input[name="urls[LinkedIn]"]').val(LINKEDIN);
  $('input[name="urls[Github ]"]').val(GITHUB);
  $('input[name="urls[Portfolio]"]').val(PORTFOLIO);
  $('textarea[name="comments"]').val(COVER_LETTER);

  // data.disability.forEach(function (entry) {
  //   // console.log(entry);
  //   var value = disability_keys[entry];
  //   $(`.application-question :nth-child(11) input[value='${value}']`).prop("checked", true);
  // });

//   var genderid = genderid_keys[data.genderID[0]];
//   console.log('`$(\'input[value=' + genderid);
//   $(`input[value='${genderid}']`).prop("checked", true);

//   var sexualOrientation = sexualOrientation_keys[data.sexualOrientation[1]];
//   $(`input[value='${sexualOrientation}']`).prop("checked", true);
};

// for i in data.disability

// $('input[value="None; I don’t have a disability"]')

// $('.myCheckbox').prop('checked', true);
