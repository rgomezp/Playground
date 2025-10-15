import { useCallback, useEffect, useState, type ReactNode } from "react"
import { fetchProducts } from "../../requests/fetchProducts"
import Card from "../../components/Card"
import type { Product } from "../../types/Product"
import type { IFilterButtonConfig } from "../../models/IFilterConfig"
import FilterBar from "../../components/FilterBar"

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts().then((products) => {
      setAllProducts(products);
      setProducts(products);
    })
  }, [])

  const renderCards = useCallback(() => {
    const productArray: ReactNode[] = [];
    products.forEach((item, j) => productArray.push(<Card product={item} key={j}/>))
    return productArray;
  }, [products])

  const renderFilterBar = () => {
    const filters: IFilterButtonConfig[] = [
      {
        text: '< $5',
        onClick: () => {
          const filteredProducts = allProducts.filter(product => {
            if (product.price < 5) {
              return product;
            }
          })
          setProducts(filteredProducts);
        }
      },
      {
        text: '$5-$10',
        onClick: () => {
          const filteredProducts = allProducts.filter(product => {
            if (5 < product.price && product.price < 10) {
              return product;
            }
          })
          setProducts(filteredProducts);
        }
      },
      {
        text: '> $10',
        onClick: () => {
          const filteredProducts = allProducts.filter(product => {
            if (product.price > 10) {
              return product;
            }
          })
          setProducts(filteredProducts);
        }
      },
    ]

    return <FilterBar filterConfig={filters}/>
  }

  return (
    <div>
      {
        renderFilterBar()
      }
      {
        renderCards()
      }
    </div>
  )
}
