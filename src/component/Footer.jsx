import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMailchimp} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
    <div className="footer  ">
    <div className="card">
      <div className="card-header bg-dark text-light">
        Contact US
      </div>
      <div className="card-body">
        <a href="www.linkedin.com/in/" className="btn btn-secondary my-2"><i className="fa-brands fa-linkedin"></i></a><br></br>
        <a href="#" className="btn btn-secondary my-2"><i className="fa-brands fa-square-facebook"></i></a><br></br>
        <a href="#" className="btn btn-secondary my-2"><i className="fa-brands fa-square-twitter"></i></a>
      </div>
    </div>
  </div>

    <script src="https://kit.fontawesome.com/baac11e6d4.js" crossorigin="anonymous"></script>
    </>
  )
}
