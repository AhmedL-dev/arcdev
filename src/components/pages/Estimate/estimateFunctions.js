export const getTotal = (questions) => {
  let cost = 0;

  const selections = questions
    .map((question) => question.options.filter((option) => option.selected))
    .filter((question) => question.length > 0);

  selections.map((options) => options.map((option) => (cost += option.cost)));

  if (questions.length > 2) {
    const userCost = questions
      .filter((question) => question.title === "How many users do you expect?")
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0][0];

    //setUsers(userCost.title);
    cost -= userCost.cost;
    cost *= userCost.cost;
  }

  //setTotal(cost);
  return cost;
};

export const getUsers = (questions) => {
  let usr = "";
  if (questions.length > 2) {
    const users = questions
      .filter((question) => question.title === "How many users do you expect?")
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0][0];

    //setUsers(users.title);
    usr = users.title;
  }
  return usr;
};

export const getPlatforms = (questions) => {
  let newPlatforms = [];

  if (questions.length > 2) {
    questions
      .filter(
        (question) =>
          question.title === "Which platforms do you need supported?"
      )
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0]
      .map((option) => newPlatforms.push(option.title));
    //setPlatforms(newPlatforms);
  }
  return newPlatforms;
};

export const getFeatures = (questions) => {
  let newFeatures = [];

  if (questions.length > 2) {
    questions
      .filter(
        (question) => question.title === "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .map((option) =>
        option.map((newFeature) => newFeatures.push(newFeature.title))
      );

    //setFeatures(newFeatures);
  }
  return newFeatures;
};

export const getCustomFeatures = (questions) => {
  let newCustomFeatures = "";
  if (questions.length > 2) {
    newCustomFeatures = questions
      .filter(
        (question) =>
          question.title ===
          "What type of custom features do you expect to need?"
      )
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0][0].title;
    //setCustomFeatures(newCustomFeatures);
  }
  return newCustomFeatures;
};

export const getCategory = (questions) => {
  let newCategory = "";
  if (questions.length === 2) {
    newCategory = questions
      .filter(
        (question) =>
          question.title === "Which type of website are you wanting?"
      )[0]
      .options.filter((option) => option.selected)[0].title;
    //setCategory(newCategory);
  }

  return newCategory;
};
