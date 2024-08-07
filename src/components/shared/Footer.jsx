
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react"
import { footerBottomData, footerData } from "../../utils/data"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="inner_footer">
          <div className="menus">
            <Link to="/"><img src={logo} alt="" /></Link>
            <p>789 Carrington Square, London - UK</p>
            <div className="info">
              <Phone size={24} weight="fill" />
              <p> +44 7700185082</p>
            </div>
            <div className="info">
              <EnvelopeSimple size={24} weight="fill" />
              <p> +44 7700185082</p>
            </div>
          </div>
          {
            footerData.map((data, index) => <div key={index} className="menus">
              <h4 className="title">{data.title}</h4>
              {
                data.menus.map((menu, idx) => <Link key={idx} to={menu.path}>{menu.name}</Link>)
              }
            </div>)
          }
        </div>
        <hr />
        <div className="inner_footer">
          <div className="menus">
            <h4 className="title">Follow Us</h4>
            <div className="social">

              {
                [<FacebookLogo size={24} weight="fill" />, <YoutubeLogo size={24} weight="fill" />, <TwitterLogo size={24} weight="fill" />, <InstagramLogo size={24} weight="fill" />].map((data, index) => <Link to="/" key={index}>{data}</Link>)
              }
            </div>
          </div>
          {
            footerBottomData.map((data, index) => <div key={index} className="menus">
              <h4 className="title">{data.title}</h4>
              <div className="info">
                <Phone size={24} weight="fill" />
                <p> {data.phone}</p>
              </div>
              <div className="info">
                <EnvelopeSimple size={24} weight="fill" />
                <p> {data.email}</p>
              </div>
            </div>)
          }
        </div>

      </div>
    </footer>
  )
}

export default Footer