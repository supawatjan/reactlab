import '../App.css';
const Currency = (props) => {
    const {currencyName, selectedCurrency,changeCurrency,changAmount,amount} = props
    return (
        <div className="currency">
            <select value={selectedCurrency} onChange={changeCurrency}>
                {currencyName.map((name)=>
                    <option key={name} value={name}>
                       {name}
                    </option>
                )}
            </select>
            <label>Amount</label>
            <input type='number' onChange={changAmount} value={amount}/>
            
        </div>
    )

}

export default Currency