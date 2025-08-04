import '../Styles/Welcome.css';

function Welcome() {
  return (
        <div className="welcome-section">
            <h1 className="welcome-title">
                <i className="fas fa-star"></i>
                Bem-vindo!
                <i className="fas fa-star"></i>
            </h1>
            
            <p className="welcome-text">
                Estou aqui para te ajudar com informações sobre diversos <strong>temas relacionados ao agronegócio</strong> e muito mais. Posso fornecer dados e insights sobre:
            </p>
        </div>
);
}

export default Welcome;