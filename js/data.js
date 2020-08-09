function getData(jobPosting, callback) {
  var data = {};
  chrome.storage.sync.get(null, function (items) {
    data = {
      NAME: items.name,
      FIRSTNAME: items.firstname,
      LASTNAME: items.lastname,
      EMAIL: items.email,
      PHONE: items.phone,
      CURRENT_COMPANY: items.company,
      SKYPE: items.skype,
      LINKEDIN: items.linkedin,
      GITHUB: items.github,
      PORTFOLIO: items.portfolio,
      COVERLETTER: items.coverletter
        .replace(/\${NAME}/gi, items.name)
        .replace(/\${COMPANY}/gi, jobPosting.company)
        .replace(/\${JOB}/gi, jobPosting.job)
        .replace(/\${PHONE}/gi, items.phone)
        .replace(/\${EMAIL}/gi, items.email),
    };

    //add some delay before autofilling
    setTimeout(function () {
      callback(data);
    }, 1000);
  });
}
