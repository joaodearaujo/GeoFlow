import { Progress } from "./progress"


type Props = {
    value: number
    status: string
}

export default function ProgressBar({value, status}: Props){
  return (
           <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-xs text-[#737982] font-semibold">Progress</p>
                <p className="text-xs text-[#737982] font-semibold">33%</p>
            </div>
            <Progress value={value}/>
        </div>
  )
}