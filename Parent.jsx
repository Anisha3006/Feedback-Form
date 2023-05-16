import React, {useState} from 'react'
import Actual from './Actual';
import Formdata from './FormData';

function Parent() {

    const[nameIP, setName] = useState('');
    const[depIP, setDep] = useState('');
    const[rateIP, setRate] = useState('');
    const[myObj, setMyObj] = useState({});
    const[users, setUsers] = useState([]);
    const[isSubmitted, setisSubmitted] = useState(false);

    let myForm1 = {
        color:'black',
        fontsize:'25px',
        fontStyle:'bolder',
        textAlign:'left',
    }
    let myForm2 = {
        border:'2px solid black',
        backgroundColor:'pink',
        display:'inline-block',
        padding:'9px',
    }
    const handleChangeName=(e)=>{
        console.log('typing...');
        setName(e.target.value);
    }
    const handleChangeDep=(e)=>{
        console.log('typing...');
        setDep(e.target.value);
    }
    const handleChangeRate=(e)=>{
        console.log('typing...');
        setRate(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj = myObj;
        tempObj={
            name:nameIP,
            dep:depIP,
            rate:rateIP
        }
        console.log(tempObj);

        let tempArr = users;
        tempArr.push(tempObj);

        setUsers(()=>([
            ...tempArr
        ]))
        console.log(users);
        setisSubmitted(!isSubmitted);
    }
    const handleBack=()=>{
        setisSubmitted(!isSubmitted)
    }
    return (
        <div>
            {
                !isSubmitted?
                <Actual handleChangeName={handleChangeName} handleChangeDep={handleChangeDep} handleChangeRate={handleChangeRate} handleSubmit={handleSubmit} styles={{...myForm1, ...myForm2}}/>
                :
                <Formdata users={users} handleBack={handleBack}/>
            }
        </div>
    )
}

export default Parent 
