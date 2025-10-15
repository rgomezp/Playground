import type { Product } from "../types/Product";

type IProps = {
  product: Product
}

export default function Card(props: IProps) {
  return (
    <div className="border-2 border-gray-800 p-4 rounded-3xl m-2 min-w-[300px] flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-row items-center justify-between mb-4">
        <img className="w-12 h-12 rounded-lg object-cover" src={props.product.image} alt={props.product.title}/>
        <div className="flex-1 ml-4">
          <h2 className="text-lg font-semibold text-gray-800">{props.product.title}</h2>
          <h3 className="text-xl font-bold text-green-600">${props.product.price}</h3>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col justify-start text-left">
          <h4 className="font-medium text-gray-600 mb-2">Description</h4>
          <p className="text-gray-700 text-sm leading-relaxed">{props.product.description}</p>
        </div>
      </div>
    </div>
  )
}
