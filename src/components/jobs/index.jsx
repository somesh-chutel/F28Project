import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSec from '../filterSec';
import './index.css';



const Jobs = ()=> {

    const token = Cookies.get("jwtToken");

    const [allValues,setValues] = useState({

        userList : []

    });

    useEffect(()=>{

        const fetchUserData = async()=>{

            const api = "https://apis.ccbp.in/jobs";

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

    },[]);


    return (

        <>

            <Header/>

           <div className='container'>

                <div className='row'>


                            <div className='col-5 filter-cont'>
                                <FilterSec/>
                            </div>

                            <ul className = "col-7 all-jobs-cont p-4">

                                    {
                                        allValues.userList.map( each => <DisplayAllJobs userDetails = {each} key = {each.id}/>)
                                    }

                            </ul>


                </div>

           </div>
        
        </>
    )
}



export default Jobs;