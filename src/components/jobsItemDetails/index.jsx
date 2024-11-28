import { useParams } from 'react-router-dom';
import './index.css';


const JobsItemDetails = ()=>{

    const {id} = useParams();

    console.log( id );

    return(

        <>
        
                    <h1> Jobs Item Details </h1>
        
        
        </>

    )
}





export default JobsItemDetails;