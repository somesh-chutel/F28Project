import { FaStar,FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './index.css';
import { Link } from "react-router-dom";


/*

{
      "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
      "title": "Devops Engineer",
      "rating": 4,
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      "location": "Delhi",
      "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
      "employment_type": "Internship",
      "package_per_annum": "10 LPA"
}

*/


const DisplayAllJobs = (props)=>{

    const {userDetails} = props; 


    return (
        <Link to={`/jobs/${userDetails.id}`} style={{color:"black",textDecoration : "none"}}>
        <li className='jobs-card'>
        
            <div className='logo-title-rating-cont'>

                <img className="mr-3" src={userDetails.company_logo_url} width="70px"/>

                <div>
                    <h3>{userDetails.title}</h3>

                    <FaStar className="mr-2 text-warning"/>
                    <span>{userDetails.rating}</span>
                </div>
            </div>

            <div className="location-ppa-empType-cont mt-2 d-flex justify-content-between">

                        <div className="location-empType-cont">
                            <FaLocationDot className="mr-1"/>
                            <span className="mr-3">{userDetails.location}</span>

                            <FaBriefcase className="mr-1"/>
                            <span>{userDetails.employment_type}</span>

                        </div>

                        <h4>{userDetails.package_per_annum}</h4>

            </div>

            <hr />

            <h4>Description</h4>

            <p>{userDetails.job_description}</p>
        
        </li>

    </Link>
    )

}



export default DisplayAllJobs;