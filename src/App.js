

const App = () => {
    return (
        <div className="mainContainer">
            <div className="informationContainer">
                <div className="inputFields">
                    
                    <div className="inputfield 1">
                    <label>DAY</label>
                    <input></input>
                    </div>

                    <div className="inputfield 2">
                    <label>MONTH</label>
                    <input></input>
                    </div>

                    <div className="inputfield 3">
                    <label>YEAR</label>
                    <input></input>
                    </div>
                
                </div>
                <div className="buttonContainer">
                   <hr className="lineBreak"/>
                   <img className="submitImage" src={'/assets/images/icon-arrow.svg'}/>
                </div>
            </div>
      
        </div>
    )
}

export default App