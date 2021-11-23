import axios from 'axios';

export const fetchBrands = async () => {
   const { data } = await axios.get('http://localhost:3000/brands')
   return data
}
export const fetchCategories = async () => {
   const { data } = await axios.get('http://localhost:3000/categories')
   return data
}
export const fetchProducts = async (page, limit = 9) => {
   const { data } = await axios.get('http://localhost:3000/products', {
      params: { page, limit }
   })
   return data
}