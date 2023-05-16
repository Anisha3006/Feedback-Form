import React from 'react'

function FormData(props) {
    let {handleBack, users} = props
    return (
        <div>
            <div>
                {users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name = {item.name}</h3>
                            <h3>Department = {item.dep}</h3>
                            <h3>Rating = {item.rate}</h3>
                            <hr />
                        </div>
                    )
                })}
                <button onClick={handleBack}>Go Back</button>
            </div>
        </div>
    )
}

export default FormData