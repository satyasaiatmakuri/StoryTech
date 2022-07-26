import React, {useState} from 'react'
import '../styles/Careers.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Link } from 'react-router-dom'
import WorkruitRed from '../assets/WorkruitRed.png'

function Career() {
  const [content1, setContent1]=useState(false);
  const [content2, setContent2]=useState(false);
  const managecontent1=()=>{
    setContent1(!content1);
  };
  const managecontent2=()=>{
    setContent2(!content2);
  };

  return (
    <div className='careers'>
      <div className='container my-5'>
          <div className='head'>
              <div className='col-4'>
                <Link to='/'><img src={WorkruitRed} alt='StoryTech'/></Link>
              </div>
          </div>
          <div className='row py-5'>
            <div className='col-10 mx-auto'>
              <div className='path py-4'>
              / CAREERS
              </div>
              <div className='role-1'>
                <div className='plus' id={content1?"open":"close"} onClick={managecontent1}><AddIcon className='symbol'  sx={{ fontSize: 40 , color:'#e94e3b'}} /></div>
                <div className='minus' id={content1?"close":"open"}  onClick={managecontent1}><RemoveIcon className='symbol' sx={{ fontSize: 40 , color:'#e94e3b' }}/></div>
                <div className='role-name display-6'>Sr Full Stack Engineer</div>
              </div>
              <div className='role-description my-5' id={content1?"close":"open"}>
                <div>
                    <ul>
                      <li>
                      Years of Experience: 5+ Years
                      </li>
                      <li>
                      Skills (Required) – Java, Spring Framework, Spring Rest, Spring MVC, JPA, MySQL, Maven, AngularJS
                      </li>
                      <li>
                      Skills Secondary – Spring Boot, AWS, Agile, GIT, HTML, Linux, AngularJS
                      </li>
                    </ul>
                </div>
                <div className='display-5 py-4'><b>Job Description (Responsibilities):</b></div>
                <div className='pt-3'>
                  <ul>
                    <li>
                    Design and develop high-volume, low-latency applications for mission-critical systems, delivering high-availability and performance.
                    </li>
                    <li>
                    Contribute in all phases of the development lifecycle.
                    </li>
                    <li>
                    Write well designed, testable, efficient code.
                    </li>
                    <li>
                    Ensure designs are in compliance with specifications.
                    </li>
                    <li>
                    Prepare and produce releases of software components.
                    </li>
                    <li>
                    Build and deploy on to AWS
                    </li>
                    <li>
                    Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review.
                    </li>
                  </ul>
                  <div className='resume-request'>Send us your resume at <span>careers@storytech.in</span> and we’ll get in touch with you.</div>
                </div>
              </div>
              <div className='role-2'>
                <div className='plus' id={content2?"open":"close"} onClick={managecontent2}><AddIcon className='symbol'  sx={{ fontSize: 40 , color:'#e94e3b'}} /></div>
                <div className='minus' id={content2?"close":"open"}  onClick={managecontent2}><RemoveIcon className='symbol' sx={{ fontSize: 40 , color:'#e94e3b' }}/></div>
                <div className='role-name display-6'>Role: Project Manager</div>
              </div>
              <div className='role-description my-5' id={content2?"close":"open"}>
                <div className='display-5 py-4'>
                  <b>Requirements:</b>
                </div>
                <div>
                    <ul>
                      <li>
                      Having worked in Web / Mobile based projects
                      </li>
                      <li>
                      A command of the English language with strong verbal and written communication skills.
                      </li>
                      <li>
                      Excellent multi-tasking skills. Must be able to manage multiple projects and ensure timely communication on project progress
                      </li>
                      <li>
                      Great educational background, preferably in the fields of computer science or engineering for technical project managers.
                      </li>
                      <li>
                      Proven working experience as a project administrator in the information technology sector
                      </li>
                      <li>
                      Solid technical background, with understanding or hands-on experience in software development and web technologies
                      </li>
                      <li>
                      Excellent client-facing and internal communication skills
                      </li>
                      <li>
                      Solid organizational skills including attention to detail and multi-tasking skills
                      </li>
                      <li>
                      Strong working knowledge of Microsoft Office
                      </li>
                    </ul>
                </div>
                <div className='display-5 py-4'><b>Job Description (Responsibilities):</b></div>
                <div className='pt-3'>
                  <ul>
                    <li>
                    Coordinate internal resources and third parties/vendors for the flawless execution of projects
                    </li>
                    <li>
                    Ensure that all projects are delivered on-time, within scope.   
                    </li>
                    <li>
                    Developing project scopes and objectives, involving all relevant stakeholders and ensuring technical feasibility 
                    </li>
                    <li>
                    Ensure resource availability and allocation
                    </li>
                    <li>
                    Develop a detailed project plan to track progress.
                    </li>
                    <li>
                    Use appropriate verification techniques to manage changes in project scope, schedule.
                    </li>
                    <li>
                    Measure project performance using appropriate systems, tools and techniques.
                    </li>
                    <li>
                    Report and escalate to management as needed.
                    </li>
                    <li>
                    Manage the relationship with the client and all stakeholders.
                    </li>
                    <li>
                    Perform risk management to minimize project risks.
                    </li>
                    <li>
                    Establish and maintain relationships with third parties/vendors.
                    </li>
                    <li>
                    Create and maintain comprehensive project documentation.
                    </li>
                  </ul>
                  <div className='resume-request'>Send us your resume at <span>careers@storytech.in</span> and we’ll get in touch with you.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='end-text col-10 mx-auto text-center display-6'>
                Don’t find what you’re looking for? Send us your resume at <span>careers@storytech.in</span> and we’ll get in touch with you.
            </div>
          </div>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default Career