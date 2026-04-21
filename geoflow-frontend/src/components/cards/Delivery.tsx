import { Box } from "lucide-react"

type Props = {}

export default function Delivery(props: Props) {
  return (
    <div className="flex flex-col w-full shrink-0 h-40 p-4 rounded-xl border border-black/10">
        <div className="flex w-full justify-between">
            <div className="flex items-center gap-2 ">
                <BoxIcon />
                <p className="text-sm font-semibold">#DEL001</p>
            </div>
            
            <div className="flex items-center gap-2 ">
                <BoxIcon />
                <p className="text-sm font-semibold">#DEL001</p>
            </div>
        </div>


    </div>
  ) 
}

function BoxIcon() {
    return <Box size={18}/>
}

// function SetStatusIcon() {

//     switch (
        
//     )

//     return <Box size={18}/>
// }