var currentURL = window.location.hostname;

switch(currentURL) {
    case "careers.robinhood.com":
        console.log("greenhosue");
        var currentURL = window.location.href;
        var postingID = (/gh_jid=([0-9]*)/g).exec(currentURL)[1]; 
        var GHPostingURL = `https://boards.greenhouse.io/embed/job_app?for=robinhood&token=${postingID}` 
        openURL(GHPostingURL);
        break;
    case "stripe.com":
        console.log("greenhosue");
        var currentURL = window.location.href;
        var postingID = (/([0-9]*)\/apply/g).exec(currentURL)[1]; 
        var GHPostingURL = `https://boards.greenhouse.io/embed/job_app?for=stripe&token=${postingID}` 
        openURL(GHPostingURL);
        break;
    default:
  }

  function openURL(url){
    chrome.runtime.sendMessage(
      { message: "open_new_tab", url },
      (response) => {
        console.log(response.message);
      }
    );
  }