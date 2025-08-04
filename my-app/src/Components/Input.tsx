import '../Styles/Input.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Input() {

  return (
    <div className="message-input-container">
            <button className="attachment-btn">
            <i className="fas fa-paperclip"></i>
            </button>
            <div className="message-input">
                <input type="text" className="message-input"  placeholder="Digite sua mensagem..."/>
            </div>
        <button className="send-btn">
            <i className="fas fa-paper-plane"></i>
        </button>
    </div>

  );
}

export default Input;