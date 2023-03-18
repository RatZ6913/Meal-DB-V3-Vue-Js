export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export interface RandomMeal {
  randomMeal: []
}

export interface CategoryList {
  categories: string[];
  category: string[];
  display: boolean;
}

export interface AreasList {
  areas: string;
}

export interface Category {
  category: string[];
}
