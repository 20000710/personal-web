import Logo from '../../assets/logo.svg'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import IconSearch from '../../assets/icon-search.svg'

import '../../styles/_navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-content'>
          <div className='left-side'>
            <section className='logo-section'>
              <img height={30} src={Logo} />
            </section>
          </div>
          <div className="right-side">
            <section className='menu-section'>
              <a href='#'>Home</a>
              <a href='#about'>About</a>
              <a href='#skills'>Skills</a>
            </section>
            <section className='search-wrapper'>
              <input name="search" type='search' />
              <img className='search-icon' src={IconSearch} />
            </section>
            <section className='social-media'>
              <a href='https://www.instagram.com/zaki_zwar/' target='_blank' className='instagram'>
                <img width={20} height={20} src={Instagram} />
                <label>Instagram</label>
              </a>
              <a href='https://www.linkedin.com/in/zaki-khairi-ziwar/' target='_blank' className='linkedin'>
                <img width={20} height={20} src={Linkedin} />
                <label>Linkedin</label>
              </a>
              <a href='https://github.com/20000710' target='_blank' className='github'>
                <img width={20} height={20} src={Github} />
                <label>Github</label>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar