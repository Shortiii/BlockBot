import './Footer.css'
import telegram from '../../assets/ftTelegram.png'
import twitter from '../../assets/ftTwitter.png'
// import footer from '../../assets/footer.png'
import illustration from '../../assets/illustraion3.png'
import art from "../../assets/FooterArt.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="illust">
          <img src={illustration} alt="" />
      </div>
      <div className="footer-div">
        <img className='art' src={art} alt="" />
        <div className="footer-info">
            <h3>DOCUMENTATION</h3>
            <h3>MEDIA KIT</h3>
            <div className="footer-img">
              <a href="https://t.me/Monad_BlockBot" target="blank"><img src={telegram} alt="" /></a>
              <a href="https://x.com/The_BlockBot" target="blank"><img src={twitter} alt="" /></a>
            </div>
            <h3 className='lab'>BLOCKLAB 2024</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
