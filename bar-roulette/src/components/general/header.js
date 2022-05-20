import logo from '../../img/Logo_Roulette.png'

export function Header() {
    return (
      <div class="navbar">
          <div class="home">
            <h1>
              <a href="#"><img id='logo' src={logo}/></a>
            </h1>
        </div>
      </div>
    );
  }
  