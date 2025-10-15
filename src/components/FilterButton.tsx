import type { IFilterButtonConfig } from "../models/IFilterConfig"

type IProps = {
  config: IFilterButtonConfig;
}

export default function Button(props: IProps) {
  return (
    <div>
      <button className="filter-btn" onClick={props.config.onClick}>
        {
          props.config.text
        }
      </button>
    </div>
  )
}
