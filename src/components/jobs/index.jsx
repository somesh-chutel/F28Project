import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSec from '../filterSec';
import './index.css';



const Jobs = ()=> {

    const token = Cookies.get("jwtToken");

    const [allValues,setValues] = useState({

        userList : [],
        userInput : ""

    });

    useEffect(()=>{

        const fetchUserData = async()=>{

            const api = `https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=${allValues.userInput}`;

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }


            try {
                
                const response = await fetch(api,options);

                const data = await response.json();

                if(response.ok === true ){

                    setValues({...allValues, userList : data.jobs});
                }

            } catch (error) {

                console.log(error);
                
            }

            


        }

        fetchUserData();

    },[allValues.userInput]);


    const onGetUserIn = (e)=>{

        if( e.key === "Enter"){

            setValues({...allValues,userInput : e.target.value});

        }

    }


    return (

        <>

            <Header/>

           <div className='container'>

                <div className='row'>


                            <div className='col-5 filter-cont p-4'>
                                <FilterSec/>
                            </div>

                            <div className='col-7 all-jobs-cont p-4 d-flex flex-column align-items-center'>
                            <input onKeyUp={onGetUserIn} type="search" className='form-control w-75 border-primary'/>
                            <ul className = "p-4">

                                    {
                                        allValues.userList.map( each => <DisplayAllJobs userDetails = {each} key = {each.id}/>)
                                    }

                            </ul>
                            </div>


                </div>

           </div>
        
        </>
    )
}



export default Jobs;