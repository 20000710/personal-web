import '../../styles/_about.scss'

import IconPersonCode from '../../assets/icon-person-code.svg'

function About() {
    return (
        <div id='about' className="about">
            <div className="container">
                <div className="content-wrapper">
                    <section className="label">
                        About Me
                    </section>
                    <section className="card">
                        <p className='tag'>{'<p>'}</p>
                        <h3>Hello!</h3>
                        <p className='description'>My name is Zaki and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.</p>
                        <p className='description'>
                            I have a passion to learn new knowledge and I am also excellent at working with teams.
                            I have finished my bootcamp at Pijar Camp where I learned about frontend stack using
                            HTML, Javascript, CSS, Node JS, React JS, and for backend stack using PostgreSQL,
                            Express JS, MVC architecture.
                        </p>
                        <p className='description'>
                            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                        </p>
                        <p className='tag'>{'</p>'}</p>
                    </section>
                    <section className='bottom-image'>
                        <img src={IconPersonCode} />
                    </section>
                </div>

            </div>
        </div>
    )
}

export default About