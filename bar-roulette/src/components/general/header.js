import logo from '../../img/Logo_Roulette.png'

export function Header() {
    return (
      <div className="navbar">
          <div className="home">
            <h1>
              <div><img id='logo' src={logo} alt='logo'/></div>
            </h1>
        </div>
      </div>
    );
  }
  