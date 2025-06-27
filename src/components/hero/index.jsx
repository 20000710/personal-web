import Profile from '../../assets/photo-profile.svg'
import IconMailBg from '../../assets/icon-mail-bg.svg'
import IconMail from '../../assets/icon-mail.svg'
import IconMapPin from '../../assets/icon-map-pin.svg'
import IconBriefcase from '../../assets/icon-briefcase.svg'

import '../../styles/_hero.scss'

function Hero() {
    return (
        <div className='hero'>
            <div className='title'>Developer</div>
            <div className='content-wrapper'>
                <section class="card">
                    <div class="card-header">
                        <img src={Profile} alt="Avatar" class="avatar" />
                    </div>
                    <div class="card-body">
                        <h2>Zaki</h2>
                        <p class="role">Frontend Developer</p>
                        <ul class="info-list">
                            <li><img src={IconMail}/> zakielbavarian@gmail.com</li>
                            <li><img src={IconMapPin}/> Jakarta, Indonesia</li>
                            <li><img src={IconBriefcase}/> Full-time</li>
                        </ul>
                        <div class="skills">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JS</span>
                            <span>REACT</span>
                        </div>
                        <button class="cv-button">
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9V12A1.5 1.5 0 002 13.5h12A1.5 1.5 0 0015.5 12V9.9a.5.5 0 011 0V12a2.5 2.5 0 01-2.5 2.5H2A2.5 2.5 0 01-.5 12V9.9a.5.5 0 011 0z" />
                                <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
                            </svg>
                        </button>
                    </div>
                </section>
                <section className='mid-content'>
                    <p className='tag'>{'<h1>'}</p>
                    <h1>
                        Hey
                    </h1>
                    <h1>I'm <span>Zaki</span></h1>
                    <h1>
                        Frontend Developer
                        <p className='tag'>{'<h1>'}</p>
                    </h1>
                    <p className='tag'>{'<p>'}</p>
                    <p className='description'>
                        I help business grow by crafting amazing web experiences. If you’re
                        looking for a developer that likes to get stuff done,
                    </p>
                    <p className='tag'>{'</p>'}</p>
                    <a 
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zakielbavarian@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='send-mail'
                    >
                        <h2>let’s Talk</h2>
                        <img src={IconMailBg} />
                    </a>
                </section>
                <section className='stats-card'>
                    <h1>
                        4 <p>Programming Language</p>
                    </h1>
                    <h1>
                        6  <p>Development Tools</p>
                    </h1>
                    <h1>
                        3 <p>Years of Experience</p>
                    </h1>
                </section>
            </div>
        </div>
    )
}

export default Hero