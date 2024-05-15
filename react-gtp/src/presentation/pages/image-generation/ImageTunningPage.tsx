
import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBox,
  GptMessageImage,
} from "../../components";
import { imageGenerationUseCase } from '../../../core/use-cases';
import { imageVariationUseCase } from "../../../core/use-cases/image-variation.use-case";

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    imageUrl: string;
    alt: string;
  }
}

export const ImageTunningPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);


const [originalImageAndMask, setoriginalImageAndMask] = useState({
    original: 'http://localhost:3000/gpt/image-generation/1715737830653.png' as string | undefined,
    maskl: undefined as string | undefined,
})


const handleVariation = async() => {
  setIsLoading(true);
  const resp = await imageVariationUseCase( originalImageAndMask.original! );
  setIsLoading(false);

  if ( !resp )return;

  setMessages( (prev) => [
    ...prev,
    {
      text: 'Variación',
      isGpt: true,
      info: {
        imageUrl: resp.url,
        alt: resp.alt
      }
    }
  ])

}

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);

    const imageInfo = await imageGenerationUseCase( text );
    setIsLoading(false);

    if ( !imageInfo ) {
      return setMessages( (prev) => [ ...prev, { text: 'No se pudo generar la imagen', isGpt: true } ] );
    }

    setMessages( prev => [
      ...prev,
      {
        text: text,
        isGpt: true,
        info: {
          imageUrl: imageInfo.url,
          alt: imageInfo.alt
        }
      }
    ])

    
  };
  return (
<>
  {
    originalImageAndMask.original && (
      <div className="fixed flex flex-col items-center top-10 right-20 fade-in">
        <span>Editando</span>
        <img 
        className="border rounded-xl w-36 h-36 object-contain"
        src={originalImageAndMask.original} 
        alt="Imagen Original" 
        />
        <button onClick={handleVariation} className="btn-primary mt-2">Generar variación</button>
      </div>
    )
  }
  <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          <GptMessage text="¿Qué imagen deseas generar hoy?" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessageImage 
                key={index} 
                text={ message.text }
                imageUrl={ message.info?.imageUrl! }
                alt={ message.info?.alt! }
              />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader className={undefined} />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aquí lo que deseas"
        disableCorrections
      />
  </div>
</>


  );
};