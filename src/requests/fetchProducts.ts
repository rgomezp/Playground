import type { Product } from "../types/Product";

export function isValidProduct(payload: unknown): payload is Product[] {
  if (!Array.isArray(payload)) {
    return false;
  }

  for (let i=0; i<payload.length; i++) {
    const item = payload[i];
    if (item.id == undefined) return false;
    if (item.title == undefined) return false;
    if (item.price == undefined) return false;
    if (item.category == undefined) return false;
    if (item.image == undefined) return false;
  }

  return true;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = fetch('https://dummyjson.com/products');
  const products = (await response).json().then(json => json.products)
  return products;

  /*
  return [
    {
      id: 1,
      title: "Bitcoin",
      price: 124000.4,
      category: Category.Bitcoin,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
    },
    {
      id: 2,
      title: "Bitcoin Cash",
      price: 124.4,
      category: Category.Bitcoin,
      image: "https://example.com"
    },
    {
      id: 3,
      title: "Ethereum",
      price: 1340.4,
      category: Category.Ethereum,
      image: "https://example.com"
    },
    {
      id: 4,
      title: "Ethereum Classic",
      price: 12.7,
      category: Category.Ethereum,
      image: "https://example.com"
    }
  ]*/
}
