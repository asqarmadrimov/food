import { API_URL } from "./ApiKey";

const getMealId = async (mealId) => {
  const respons = await fetch(API_URL + 'lookup.php?i=' + mealId);

  return respons.json();
};

const getAllCategories = async () => {
  const respons = await fetch(API_URL + 'categories.php');

  return respons.json();
};

const getMealFilter = async (name) => {
  const respons = await fetch(API_URL + 'filter.php?c=' + name);

  return respons.json();
};

export {getMealId, getAllCategories, getMealFilter};

