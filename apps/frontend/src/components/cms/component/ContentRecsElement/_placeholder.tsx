'use client'
import { type FunctionComponent } from "react"

export const PlaceHolder : FunctionComponent = () => {
    return <div className="w-full aspect-[4/5] on-light-grey blur-lg animate-pulse rounded-[2rem]">
        <div className="m-12 rounded-[2rem] on-independence aspect-[16/9]"></div>
        <div className="mx-12 on-independence aspect-[6/1] w-3/4"></div>
    </div>
}

export default PlaceHolder