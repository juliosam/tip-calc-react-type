import { Dispatch } from 'react'
import {SetStateAction} from 'react'
interface Props {
    setBill:  Dispatch<SetStateAction<number>> }

export const Bill = ({setBill}:Props) =>{

    const bill = (e:any)=> {
        const cuenton = Number(e.target.value)
        setBill(cuenton)
    }

    return(
        <div className="bill">
            <span>Bill</span>
            <input onChange={bill} className="billInput" />
        </div>
    )
}

