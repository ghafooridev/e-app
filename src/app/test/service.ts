"use cache"
export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/api/product');
  const result = await response.json();
  return result
}