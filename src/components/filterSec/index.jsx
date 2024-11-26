import './index.css';

const empTypeList = [
    {
        label : "Freelance",
        id : "input1"
    },
    {
        label : "FullTime",
        id : "input2"
    },
    {
        label : "PartTime",
        id : "input3"
    },
    {
        label : "Internship",
        id : "input4"
    },
]


const FilterSec = ()=>{


    return (
        <>
        
            <h1> FilterSec Component </h1>

            <ul>
                {
                    empTypeList.map((each)=>(

                        <li>
                            <input type="checkbox" id={each.id}/>
                            <label htmlFor={each.id}>{each.label}</label>
                        </li>
                    ))
                }
            </ul>
        
        </>
    )

}



export default FilterSec;