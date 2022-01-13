export const addPollfish = () => {
  const script = document.createElement('script');
  script.src = "https://storage.googleapis.com/pollfish_production/sdk/webplugin/pollfish.min.js";
  script.async = true;
  document.body.appendChild(script);
}

export const addPollfishConfig = () => {
  const script = document.createElement('script');
  script.src = "/pollfishConfig.js";
  script.async = true;
  document.body.appendChild(script);
}

export const addJquery = () => {
  const script = document.createElement('script');
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
  script.async = true;
  document.body.appendChild(script);
}