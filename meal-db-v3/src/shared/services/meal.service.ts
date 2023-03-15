import type { CategoryList } from "../interfaces/meal.interface";

export async function fetchRandomMeal(): Promise<any> {
  const meals = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  ).json();
  return meals;
}

export async function fetchGetCategory(): Promise<any> {
  return await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  ).json();
  
}

export async function fetchGetAreas(): Promise<any> {
  return await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  ).json();
}


// export async function fetchMealsByLetters(letters: string): Promise<any> {
//   const meals = await (
//     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letters}`)
//   ).json();
//   return meals;
// }

// export async function fetchByCategory(category: string): Promise<any> {
//   const meals = await (
//     await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//   ).json();
//   return meals;
// }

// export async function fetchMealsByCountry(country: string): Promise<any> {
//   const meals = await (
//     await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
//   ).json();
//   return meals;
// }

// export async function fetchMealsById(idMeal: string | number): Promise<any> {
//   const meals = await (
//     await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
//   ).json();
//   return meals;
// }