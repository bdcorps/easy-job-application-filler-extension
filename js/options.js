$(document).ready(function () {
  getData();
});

$("#submit").click(function () {
  submitData();
});

$("#get").click(function () {
  getData();
});

var getData = function () {
  chrome.storage.sync.get(null, function (items) {
    console.log("items ", items);

    $("#firstname").val(items.firstname);
    $("#lastname").val(items.lastname);
    $("#email").val(items.email);
    $("#company").val(items.company);
    $("#phone").val(items.phone);
    $("#skype").val(items.skype);
    $("#linkedin").val(items.linkedin);
    $("#github").val(items.github);
    $("#twitter").val(items.twitter);
    $("#portfolio").val(items.portfolio);

    if (items.coverletter) {
      $("#coverletter").val(items.coverletter);
    }
  });
};

var submitData = function () {
  var firstname = $("#firstname").val();
  var lastname = $("#lastname").val();
  var name = firstname +" " + lastname;
  var email = $("#email").val();
  var company = $("#company").val();
  var phone = $("#phone").val();
  var skype = $("#skype").val();
  var linkedin = $("#linkedin").val();
  var github = $("#github").val();
  var twitter = $("#twitter").val();
  var portfolio = $("#portfolio").val();
  var coverletter = $("#coverletter").val();

  console.log(name);
  var data = {
    firstname,
    lastname,
    name,
    email,
    company,
    phone,
    skype,
    linkedin,
    github,
    twitter,
    portfolio,
    coverletter,
  };
  chrome.storage.sync.set(data, function () {
    console.log(data);
  });
};
