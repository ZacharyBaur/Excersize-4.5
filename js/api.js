/* 
  api.js
  -------------------------
  This file contains functions for interacting 
  with the Cat Facts API. Each function returns 
  JSON data that the main page can render.
*/

// Fetch a single random cat fact
export async function getRandomFact() {
  const response = await fetch("https://catfact.ninja/fact");
  return response.json();
}

// Fetch a list of cat facts (default: 5)
export async function getFactList(limit = 5) {
  const response = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
  return response.json();
}
