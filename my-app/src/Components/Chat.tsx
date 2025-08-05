import '../Styles/Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import Card from './Card'
import '../Styles/Card.css';
import Icon from './Icon'
import Welcome from './Welcome'
import '../Styles/Input.css';
import '../Styles/Message.css';
import ClipLoader from 'react-spinners/ClipLoader';

interface Message {
  sender: 'bot' | 'user';
  content: string;
}

const socket: Socket = io('http://localhost:4000'); // Change to your backend URL

var initialComponentsVisible = true;

const Chat: React.FC = () => {

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.on('botMessage', (msg: string) => {
      setIsLoading(false);
      setMessages(prev => [...prev, { sender: 'bot', content: msg }]);
      console.log('bottomRef.current:', bottomRef.current);
      const timeout = setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 80); // Wait for next tick
        return () => clearTimeout(timeout);
    });

    return () => {
      socket.off('botMessage');
    };
  }, []);

  const SendDataWithSocket = () =>
  {
    setIsLoading(true);
    socket.emit('message', input);
  }

  const SendDataWithHTTP = async () =>
  {
    setIsLoading(true);

    const data = {
        token: '12345',
        message: input,
      };

      try {
      const res = await fetch('http://10.89.10.6:5678/webhook/61c8a054-c2c5-4d70-b4bc-6b7aab38ec9b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log('Response:', result.output);

      setMessages(prev => [...prev, { sender: 'bot', content: result.output }]);

      console.log('bottomRef.current:', bottomRef.current);
      const timeout = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });}, 80); // Wait for next tick
      return () => clearTimeout(timeout);

    } catch (err) {
      console.error('Error:', err);
    }
    finally
    {
      setIsLoading(false);
    }


  }


  const handleSend = async () => {
    if (!input.trim()) return;
    initialComponentsVisible = false;
    
   
    
  
    const newMessage: Message = { sender: 'user', content: input }; 
    setMessages(prev => [...prev, newMessage]);
    
    setInput('');

    
    SendDataWithSocket();
    //await SendDataWithHTTP();

    
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

  function formatPlainText(input: string): string {
  return input
    // Remove ** but preserve text inside
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // Add line break before lines starting with '- '
    .replace(/-/g, '\n-')
    .replace(/\[Link\]/g, '');
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
                    <pre className="message-content" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                      {formatPlainText(msg.content)}
                    </pre>
                </div>
            ))}
          {/* Scroll anchor */}
          <div ref={bottomRef}></div>

          {isLoading && <div>
                        <ClipLoader color="#36d7b7"/>
                        <p>Loading...</p>
                        </div>}
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