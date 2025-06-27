import '../../styles/_skills.scss'

import IconTagCode from '../../assets/icon-tag-code.svg'

function Skills() {
  return (
    <div className='skills-section'>
      <div className="container">
        <section className='code-icon'>
          <img src={IconTagCode} />
        </section>
        <section className="top-content">
          <h2>Skills</h2>
          <div class="underline">
            <span class="dot"></span>
            <span class="line"></span>
            <span class="dot"></span>
          </div>
          <p>I am striving to never stop learning and improving</p>
        </section>
      </div>
    </div>
  )
}

export default Skills