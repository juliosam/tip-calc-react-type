

export const Bill = () =>{

    const bill = ()=> {console.log('not')}

    return(
        <div className="bill">
            <span>Bill</span>
            <input onChange={bill} className="billInput" />
        </div>
    )
}