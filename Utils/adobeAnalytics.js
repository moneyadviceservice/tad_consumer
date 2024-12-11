export const addEvent = (props) => {
  const { event, pageName, pageTitle, lang, toolStep, stepName } = props;
  window.adobeDataLayer.push({
    event: event,
    page: {
      pageName: pageName,
      pageTitle: pageTitle,
      categoryL1: "Everyday money",
      categoryL2: "Insurance",
      lang: lang,
      site: "moneyhelper",
      pageType: "tool page",
    },
    tool: {
      toolName: "Travel Adviser Directory",
      toolCategory: "",
      toolStep: toolStep,
      stepName: stepName,
    },
  });
};
