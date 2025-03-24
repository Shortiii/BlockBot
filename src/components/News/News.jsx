import "./News.css";
import Img from "../../assets/news.png";
import faq from "../../assets/FAQ.png"
import arrow from '../../assets/more.png'

const News = () => {
  return (
    <div className="news">
      <div className="new-center">
        <h1>Latest From The Block</h1>
        <div className="new-blog">
            <div className="blog">
                <h2>Block Trading</h2>
                <p>Building alongside our community helps shape our product in ways that ensure.</p>
                <div className="blog-img">
                    <img src={Img} alt="" />
                </div>
                <div className="more">
                <h3>READ NOW. READ NOW</h3>
                </div>
            </div>
            <div className="blog blog-more">
                <h2>Social Layers</h2>
                <p>Building alongside our community helps shape our product in ways that ensure.</p>
                <div className="blog-img">
                    <img src={Img} alt="" />
                </div>
                <div className="more">
                <h3>READ NOW. READ NOW</h3>
                </div>
                <div className="move">
              <img src={arrow}alt="" />
            </div>
            </div>
        </div>
      </div>
      <div className="faq-icon">
        <img src={faq} alt="" />
      </div>
    </div>
  )
}

export default News
