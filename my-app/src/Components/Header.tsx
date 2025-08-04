import Logo from './Logo'
import SocialItens from './SocialItens';
import NavigationMenu from './NavigationMenu';
import Button from './Button';
import Divider from './Divider';
import '../App.css';

function Header() {
  return (
      <header className="header">
            <div className = "header-content">
              <Logo/>
              <div className="TopMenu">
                <SocialItens/>
                <NavigationMenu/>
              </div>
              <Button/>
            </div>
            <Divider/>
      </header>
  );
}

export default Header;