import { useState } from 'react';
import { GptMessage, GptOrthographyMessage, MyMessage, TextMessageBox, TypingLoader } from "../../components";
import { orthographyUseCase } from '../../../core/use-cases';

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  }
}

export const OrthographyPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async( text: string ) => {

    setIsLoading(true);
    setMessages( (prev) => [...prev, { text: text, isGpt: false }] );

    // desestructuracion
   const data = await orthographyUseCase(text)
    if(!data.ok){
      setMessages( (pre) => [...pre, {text: 'No se pudo realizar la corrección', isGpt:true}])
    }else {
      setMessages( (pre) => [...pre, {
        text: data.message, isGpt:true,
        info: {
          errors: data.errors,
          message: data.message,
          userScore: data.userScore,
        }
      }])      
    }


  setIsLoading(false);

    // Todo: Añadir el mensaje de isGPT en true


  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />

          {
            messages.map( (message, index) => (
              message.isGpt
                ? (
                  <GptOrthographyMessage 
                  key={ index } 
                  // {...message.info!}
                  errors={message.info!.errors}
                  message={message.info!.message}
                  userScore={message.info!.userScore}
                  />
                )
                : (
                  <MyMessage key={ index } text={ message.text } />
                )
                
            ))
          }

          
          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader className="fade-in"/>
              </div>
            )
          }
          

        </div>
      </div>


      <TextMessageBox 
        onSendMessage={ handlePost }
        placeholder='Escribe aquí lo que deseas'
        disableCorrections
      />

      {/* <TextMessageBoxFile 
        onSendMessage={ handlePost }
        placeholder='Escribe aquí lo que deseas'
      /> */}

      {/* <TextMessageBoxSelect 
      onSendMessage={ console.log}
      options={ [ {id:"1", text: 'Hola'}, {id: "2", text: 'Mundo'}]}
      />TextMessageBoxSelect */}

    </div>
  );
};