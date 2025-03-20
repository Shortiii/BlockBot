import './Footer.css'
import telegram from '../../assets/ftTelegram.png'
import twitter from '../../assets/ftTwitter.png'
import footer from '../../assets/footer.png'
import illustration from '../../assets/illustraion1.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-div">
        <div className="footer-info">
            <h3>DOCUMENTATION</h3>
            <h3>MEDIA KIT</h3>
            <div className="footer-img">
                <img src={telegram} alt="" />
                <img src={twitter} alt="" />
            </div>
            <h3 className='lab'>BLOCKLAB 2024</h3>
        </div>
        <div className="foot-img">
            <img src={footer} alt=""   />
        </div>
      </div>
      <img src={illustration} alt="" />
    </div>
  )
}

export default Footer
