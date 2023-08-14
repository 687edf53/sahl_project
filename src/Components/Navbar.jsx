import './Navbar.css'

// Logo
import Logo from '../images/logo_v3.png'
import search_icon from '../images/search.png'
// Countries
import egypt from '../images/eg.png'
import iraq from '../images/iq.png'
import sodia from '../images/sa.png'
// Icons
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import google from '../images/google.png'

export default function Navbar()
{
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center">
        <div className="container-fluid mx-5 d-flex">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* ClassMate */}
          <div className="classmate">
            <span>3</span>
            <span>2</span>
            <span className='active'>1</span>
            <span className="address-classmate">:الفصل</span>
          </div>
          {/* Search */}
          <form style={{ width: '242px', position: 'relative' }} className="d-flex search_section" role="search">
            <input className="form-control me-2" type="text" style={{ width: '100%' }} placeholder="بحث في عناوين الدروس" aria-label="Search" />
            <button type='button' style={{ 'width': '20%' }}><img src={search_icon} alt="search_icon" /></button>
          </form>
          {/* Logo */}
          <a className="logo " href="#"><img src={Logo} alt=".." /></a>
          {/* Country */}
            <a href='#' title="المنهج السعودي">
          <div className="count">
              <img src={sodia} alt="" />
          </div>
            </a>
          {/* Signin */}
          <div className="logins ">
            <div className="medias">
              <div className="google"><a target="_blank" href={'https://' + location.hostname+'/login/google' }><img src={google} alt="google" /></a></div>
              <div className="twitter"><a target="_blank" href={'https://' + location.hostname + '/login/twitter'}><img src={twitter} alt="twitter" /></a></div>
              <div className="facebook"><a target="_blank" href={'https://' + location.hostname + '/login/facebook'}><img src={facebook} alt="facebook" /></a></div>
              <span>:دخول</span>
            </div>
      
          </div>
        </div>
      </nav>
    </>
  )
}
