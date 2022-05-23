import './App.css'
import fundo from '../src/assets/image.png'
import capa from '../src/assets/capa.png'
import Star from '../src/assets/star.png'
import clock from '../src/assets/Vector.png'
function App() {

  return (
    <>
         <img src={fundo} className="fundo" alt="Foto Loki"  />
   
    <div className="App"> 
     
        <p className="text loki">loki</p>
        <p className="text">Está disponível agora!</p>   
        <div className="content ">
          <div className="tudo">
            
              <div className="details">
              <img src={capa} alt="Poster do filme Loki" className="capa"></img>
                <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
                <img ></img>
                <p>51 min</p>

                <div className="star ">
                  <img src={Star} ></img>
                  <img src={Star} ></img>
                  <img src={Star} ></img>
                  <img src={Star} ></img>
                  <img src={Star} ></img>
              
                </div>
              
                <p>2021</p>
                <button  onClick={() => window.open("https://www.disneyplus.com/", "_blank")}>Assistir Agora</button>
                <button className="botao"  onClick={()=> window.open("https://www.youtube.com/watch?v=xdBWrkcmMwU", "_blank")}> Trailer</button>
              </div>   
              </div>
        </div>
        
    </div>
    </>
  )
}

export default App