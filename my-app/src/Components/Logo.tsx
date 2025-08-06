
import '../Styles/Logo.css';
import sidi from '../Assets/sidi_logo.png';

function Logo() {
  return (
        <div className="logo-section">
          <img src={sidi} alt="Logo" width={200} height={55} />
            <div>
                <div className="logo">ABDI</div>
                <div className="logo-text">Agência Brasileira de Desenvolvimento Industrial</div>
            </div>
        </div>
  );
}

export default Logo;