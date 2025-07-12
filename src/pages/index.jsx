
import About from '../components/about'
import Blogs from '../components/blogs'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Skills from '../components/skills'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Blogs />
    </>
  )
}

export default Home