import '../../styles/_skills.scss'

import IconTagCode from '../../assets/icon-tag-code.svg'
import HTMLIcon from '../../assets/html-icon.svg'
import CSSIcon from '../../assets/css-icon.svg'
import JSIcon from '../../assets/js-icon.svg'
import ReactIcon from '../../assets/react-icon.svg'

function Skills() {
  return (
    <div id='skills' className='skills-section'>
      <div className="container">
        <section className='code-icon'>
          <img width={200} src={IconTagCode} />
        </section>
        <section className="top-content">
          <h2>Skills</h2>
          <div class="underline">
            <span class="dot"></span>
            <span class="line"></span>
            <span class="dot"></span>
          </div>
          <p>I am striving to never stop learning and improving</p>

          <section className='web-skills'>
            <div>
              <img src={HTMLIcon}/>
              <p className='html'>HTML</p>
            </div>
            <div>
              <img src={CSSIcon}/>
              <p className='css'>CSS</p>
            </div>
            <div>
              <img src={JSIcon}/>
              <p className='js'>JS</p>
            </div>
            <div>
              <img src={ReactIcon}/>
              <p className='react'>REACT</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Skills