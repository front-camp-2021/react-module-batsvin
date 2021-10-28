import { $host } from "./index"

export const fetchBrands = async () => {
   const { data } = await $host.get('api/brands')
   return data
}
export const fetchCategories = async () => {
   const { data } = await $host.get('api/categories')
   return data
}
export const fetchProducts = async () => {
   const { data } = await $host.get('api/products')
   return data
}