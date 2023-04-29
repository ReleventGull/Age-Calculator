import { useState } from "react"

const App = () => {
    let [day, setDay] = useState(null)
    let [month, setMonth] = useState(null)
    let [year, setYear] = useState(null)
    let [calc, setCalc] = useState(null)

    const submit = () => {
        day.length < 2 ? day = `0${day}`: null

        month.length < 2 ? month = `0${month}`: null

        year.length == 1 ? year = `000${year}` : year.length == 2 ?  year = `00${year}`: year.length == 3 ? year = `0${year}`: null
        
        const chosenDate = new Date(`${year}-${month}-${day}T00:00:00`)
        
        console.log(chosenDate)
        let mili = chosenDate.getTime()
        
        const years =  mili / 3.154e+10 

        console.log(years)
        


    }
    return (
        <div className="mainContainer">
            <div className="informationContainer">
                <div className="inputFields">
                    
                    <div className="inputfield 1">
                    <label>DAY</label>
                    <input value={day} onChange={(e) => setDay(e.target.value)}></input>
                    </div>

                    <div className="inputfield 2">
                    <label>MONTH</label>
                    <input value={month} onChange={(e) => setMonth(e.target.value)}></input>
                    </div>

                    <div className="inputfield 3">
                    <label>YEAR</label>
                    <input value={year} onChange={(e) => setYear(e.target.value)}></input>
                    </div>
                
                </div>
                <div className="buttonContainer">
                   <hr className="lineBreak"/>
                   <img onClick={submit} className="submitImage" src={'/assets/images/icon-arrow.svg'}/>
                </div>
            </div>
            <div className="resultContainer">
                <span><span className="resultData">{calc || '--'}</span> years</span>
                <span><span className="resultData">{calc || '--'}</span> months</span>
                <span><span className="resultData">{calc || '--'}</span> days</span>
            </div>
      
        </div>
    )
}

export default App