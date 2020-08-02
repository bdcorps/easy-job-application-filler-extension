var NAME = "NAME"
var EMAIL = "EMAIL"
var PHONE = "PHONE"
var COMPANY = "CURRENT_COMPANY"
var LINKEDIN = "LINKEDIN"
var TWITTER = "TWITTER"
var GITHUB = "GITHUB"
var PORTFOLIO = "PORTFOLIO"
var OTHER = "OTHER"

$('input[name="name"]').val(NAME);
$('input[name="email"]').val(EMAIL);
$('input[name="phone"]').val(PHONE);
$('input[name="org"]').val("COMPANY");
$('input[name="urls[LinkedIn]"]').val(LINKEDIN);
$('input[name="urls[Twitter]"]').val(TWITTER);
$('input[name="urls[GitHub]"]').val(GITHUB);
$('input[name="urls[Portfolio]"]').val(PORTFOLIO);
$('input[name="urls[Other]"]').val(OTHER);

// $("select[name='eeo[gender]']").val("Male");
// $("select[name='eeo[race]']").val("race");
// $("select[name='eeo[veteran]']").val("veteran");
// $("select[name='eeo[disability]']").val("disability");