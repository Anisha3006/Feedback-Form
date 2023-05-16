import React from 'react'

function Actual(props) {
    //destructuring of props object
    let {handleChangeName, handleChangeDep, handleChangeRate, handleSubmit, styles} = props;

    return (
        <div>
            <form style={styles}>
                <label>Name: </label>
                <input type="text" id="nameIP" onChange={handleChangeName} />
                <br /><br />
                <label>Department: </label>
                <input type="text" id="depIP" onChange={handleChangeDep} />
                <br /><br />
                <label>Rating : </label>
                <input type="text" id= "rateIP" onChange={handleChangeRate}/>
                <br /><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Actual