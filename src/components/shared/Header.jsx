import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { navitems } from '../../utils/data'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='header_inner'>
          <Link to="/"><img src={logo} alt="" /></Link>
          <div className='navitems'>
            {
              navitems.map((data, index) => <Link className='navitem' key={index} to={data.path}>{data.name}</Link>)
            }
          </div>
          <div>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header