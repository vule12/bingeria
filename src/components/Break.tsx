import { Flame } from 'lucide-react'

export default function Break() {
    return(
        <div className="flex items-center gap-4 px-4">
            <Flame className="size-10 text-[#F0BE4D]"/>
            <p className="text-lg md:text-4xl font-bold text-white">Trending</p>
            <hr className="flex-1 h-px bg-[#504A79]/50 border-none" />
        </div>
    )
}