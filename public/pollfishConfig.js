var pollfishConfig = {
  api_key: "2eb9af6c-ae13-44cc-8c8b-130da8f9a5fc",
  debug: true,
  surveyCompletedCallback: customSurveyFinished,
  closeCallback: customSurveyClosed,
};

function customSurveyFinished(data){
  console.log(data);
}

function customSurveyClosed(){
  console.log("user closed the survey");
}
