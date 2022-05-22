import { Dispatch } from 'react'
import {SetStateAction} from 'react'
interface Props {
    setPayersNumber:  Dispatch<SetStateAction<number>>}

export const PeopleNumber = ({setPayersNumber}:Props) =>{

    const people = (e:any)=> {
        const peopleCant = Number(e.target.value)
        setPayersNumber(peopleCant)
    }

    return(
        <div className="people-number">
            <span>Number of People</span>
            <input onChange={people} className="people-number-input" />
        </div>
    )
}
