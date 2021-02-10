export const randomOption = (optionList) => {
  const randomNum = Math.floor(Math.random() * optionList.length);
  return optionList[randomNum];
};

export const addOption = (optionList, newOption) => {
  return optionList.concat(newOption);
};

export const removeOption = (optionList, oldOption) => {
  return optionList.filter((option) => option !== oldOption);
};

export const saveOptions = (nextOptionList, prevOptionList) => {
  if (prevOptionList.length !== nextOptionList.length) {
    try {
      const data = JSON.stringify(nextOptionList);

      localStorage.setItem('react-indecision-app_options', data);
    } catch (error) {
      console.log('[APP]', 'Local storage error');
    }
  }
};

export const readOptions = () => {
  try {
    const data = localStorage.getItem('react-indecision-app_options');

    return JSON.parse(data);
  } catch (e) {
    console.log('[APP]', 'Local storage error');
  }
};
