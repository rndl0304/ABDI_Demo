import '../Styles/Card.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = {
  text: string;
};

function Card() {
  return (
        <div className="topics-grid">
                <button className="topic-card">
                    <div className="topic-icon business-icon">
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h3 className="topic-title">Negócios</h3>
                    <p className="topic-description">Agtechs, Cooperativas, Maquinário, Apoio técnico, Conectividade, Rebanhos...</p>
                </button>
                <button className="topic-card">
                    <div className="topic-icon knowledge-icon">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <h3 className="topic-title">Conhecimento</h3>
                    <p className="topic-description">Universidades, Institutos de pesquisa...</p>
                </button>

                <button className="topic-card">
                    <div className="topic-icon government-icon">
                        <i className="fas fa-globe-americas"></i>
                    </div>
                    <h3 className="topic-title">Governo</h3>
                    <p className="topic-description">Políticas públicas, Ministérios, Incentivos...</p>
                </button>

                <button className="topic-card">
                    <div className="topic-icon culture-icon">
                        <i className="fas fa-users"></i>
                    </div>
                    <h3 className="topic-title">Cultura</h3>
                    <p className="topic-description">Tradições, Eventos culturais, Patrimônio rural...</p>
                </button>

                <button className="topic-card">
                    <div className="topic-icon economy-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="topic-title">Economia</h3>
                    <p className="topic-description">Indicadores econômicos, Mercado agrícola, Investimentos...</p>
                </button>

                <button className="topic-card">
                    <div className="topic-icon tourism-icon">
                        <i className="fas fa-suitcase"></i>
                    </div>
                    <h3 className="topic-title">Turismo</h3>
                    <p className="topic-description">Turismo rural, Roteiros, Experiências no campo...</p>
                </button>
        </div>
  );
}

export default Card;