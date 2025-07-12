import "../../styles/_blogs.scss"
import Carousel from "../carousel"

function Blogs() {
    return (
        <div className="blogs-section" id='blogs'>
            <div className="top-content">
                <h2>Blogs</h2>
                <div class="underline">
                    <span class="dot"></span>
                    <span class="line"></span>
                    <span class="dot"></span>
                </div>
                <p>It's always make me proud to write this blogs</p>
            </div>
                <Carousel />
        </div>
    )
}

export default Blogs