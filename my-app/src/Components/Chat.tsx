import '../Styles/Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Card from './Card'
import '../Styles/Card.css';
import Icon from './Icon'
import Welcome from './Welcome'
import '../Styles/Input.css';
import '../Styles/Message.css';

interface Message {
  sender: 'bot' | 'user';
  content: string;
}

const socket: Socket = io('http://localhost:4000'); // Change to your backend URL

var initialComponentsVisible = true;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('botMessage', (msg: string) => {
      setMessages(prev => [...prev, { sender: 'bot', content: msg }]);
    });

    return () => {
      socket.off('botMessage');
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    initialComponentsVisible = false;
    const newMessage: Message = { sender: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    socket.emit('message', input);
    setInput('');
  };

  const handleSetBusiness = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre os negócios do Agronegócio no Nordeste.');
  }

  const handleSetKnowledge = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre quais são as Universidades e Institutos de Pesquisa do Agronegócio no Nordeste.');
  }

  const handleSetGovernment = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre quais são as Entidades Governamentais ligadas ao Agronegócio no Nordeste.');
  }

  const handleSetCulture = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre quais são os eventos do Agronegócio no Nordeste.');
  }

  const handleSetEconomy = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre a economia do Agronegócio no Nordeste, comparando também com a economia do Brasil.');
  }

    const handleSetTourism = () =>
  {
    setInput('');
    setInput('Olá, AgroBot, tudo bem? Por gentileza, com base nas informações que você possui, me forneça um resumo de uma página sobre o turismo ligado ao Agronegócio no Nordeste, comparando também com o turismo geral no Brasil.');
  }


  return (
    <div className="chatbot-container">
        <Icon/>
        <div>
            {
                initialComponentsVisible ?
                <>  <Welcome />
                    <div className="topics-grid">
                        <button className="topic-card"  onClick={handleSetBusiness}>
                            <div className="topic-icon business-icon">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <h3 className="topic-title">Negócios</h3>
                            <p className="topic-description">Agtechs, Cooperativas, Maquinário, Apoio técnico, Conectividade, Rebanhos...</p>
                        </button>
                        <button className="topic-card" onClick={handleSetKnowledge}>
                            <div className="topic-icon knowledge-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3 className="topic-title">Conhecimento</h3>
                            <p className="topic-description">Universidades, Institutos de pesquisa...</p>
                        </button>

                        <button className="topic-card" onClick={handleSetGovernment}>
                            <div className="topic-icon government-icon">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h3 className="topic-title">Governo</h3>
                            <p className="topic-description">Políticas públicas, Ministérios, Incentivos...</p>
                        </button>

                        <button className="topic-card" onClick={handleSetCulture}>
                            <div className="topic-icon culture-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className="topic-title">Cultura</h3>
                            <p className="topic-description">Tradições, Eventos culturais, Patrimônio rural...</p>
                        </button>

                        <button className="topic-card" onClick={handleSetEconomy}>
                            <div className="topic-icon economy-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="topic-title">Economia</h3>
                            <p className="topic-description">Indicadores econômicos, Mercado agrícola, Investimentos...</p>
                        </button>

                        <button className="topic-card" onClick={handleSetTourism}>
                            <div className="topic-icon tourism-icon">
                                <i className="fas fa-suitcase"></i>
                            </div>
                            <h3 className="topic-title">Turismo</h3>
                            <p className="topic-description">Turismo rural, Roteiros, Experiências no campo...</p>
                        </button>
                    </div>
                </> :
                <></>
            }
        </div>
        
        <div className='chatbot-screen'>
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={`message-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
                >
                    {msg.sender === 'bot' && <div className="bot-icon"><i className="fas fa-leaf chatbot-icon"></i></div>}
                    <div className="message-content">{msg.content}</div>
                </div>
            ))}
        </div>

        <div className="message-input-container">
            <input
                className="message-input"
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
        <button className="send-btn" onClick={handleSend}>➤</button>
      </div>
    </div>
  );
};

export default Chat;