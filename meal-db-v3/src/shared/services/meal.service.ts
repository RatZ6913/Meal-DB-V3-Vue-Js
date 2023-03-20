import type { AreasList, CategoryList, RandomMeal } from "../interfaces/meal.interface";

export async function fetchRandomMeal(): Promise<RandomMeal> {
  return await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  ).json();
}

export async function fetchGetCategory(): Promise<CategoryList['categories']> {
  return await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  ).json();
}

export async function fetchByCategory(category: string): Promise<CategoryList['category']> {
  return await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  ).json();
}

export async function fetchGetAreas(): Promise<AreasList['areas']> {
  return await (
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  ).json();
}

export async function fetchByArea(country: string): Promise<AreasList['area']> {
  return await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  ).json();
}
