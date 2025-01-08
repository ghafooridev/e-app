// 
// import { unstable_cacheLife as cacheLife } from 'next/cache'

export const getProducts = async () => {
  // "use cache"
  // cacheLife("seconds")
  const response = await fetch('http://localhost:3000/api/product');
  const result = await response.json();
  console.log('service is called')
  return result
}