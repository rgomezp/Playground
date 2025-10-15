import type { ReactElement } from "react";
import type { IFilterButtonConfig } from "../models/IFilterConfig";
import Button from "./FilterButton";

type IProps = {
  filterConfig: IFilterButtonConfig[];
}

export default function FilterBar(props: IProps) {
  const getButtons = (): ReactElement[] => {
    const buttonsArr: ReactElement[] = [];

    for (const config of props.filterConfig) {
      buttonsArr.push(<Button config={config} key={config.text}/>)
    }

    return buttonsArr;
  }

  return (
    <div className="flex flex-row gap-5 mb-6 p-4 bg-gray-50 rounded-lg">
      {getButtons()}
    </div>
  )
}
