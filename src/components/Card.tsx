import type { Product } from "../types/Product";

type IProps = {
  product: Product
}

export default function Card(props: IProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-md m-20">
      <div className="card-header">
        <img className="card-img" src={props.product.image}/>
        <h2>{props.product.title}</h2>
        <h3>{props.product.price}</h3>
      </div>
      <div className="card-body">
        <div className="card-description">
          <h4>Description</h4>
          <h4>{props.product.description}</h4>
        </div>
      </div>
    </div>
  )
}
