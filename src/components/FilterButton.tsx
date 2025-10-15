import type { IFilterButtonConfig } from "../models/IFilterConfig"

type IProps = {
  config: IFilterButtonConfig;
}

export default function Button(props: IProps) {
  return (
    <div>
      <button 
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
        onClick={props.config.onClick}
      >
        {props.config.text}
      </button>
    </div>
  )
}
