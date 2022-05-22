import { Dispatch } from 'react'
import {SetStateAction} from 'react'

interface Props {
    setTipPercent:  Dispatch<SetStateAction<number>> }

export const TipPercent = ({setTipPercent}:Props) =>{
    
    const pickPercent = (e:any)=>{
        const porcento = Number(e.target.value)
        setTipPercent(porcento)
    }
    const writePercent = (e:any) =>{
        const porcento = Number(e.target.value/100)
        setTipPercent(porcento)
    }

    return(
      <div className="percent-tip" onClick={pickPercent}>
        <span>Select Tip %</span>
        <button value={0.05}>5%</button>
        <button autoFocus value={0.1}>10%</button>
        <button value={0.15}>15%</button>
        <button value={0.25}>25%</button>
        <button value={0.5}>50%</button>
        <input placeholder="Custom" onInput={writePercent} ></input>
      </div>
    )
}