import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Card from './components/Card';
const data = [
  {
    title: "Skridskor",
    description:
      "Den spegelblanka isen är din melodi där är du lycklig och känner dig fri. Fart, konster och snabba skär. Det är otroligt hur fort du dig lär",
    url: "https://images.unsplash.com/photo-1615828087808-ee81ce35fbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    
  },

  {
    title: "Choklad",
    description: "Av denna blir man god och glad.",
    url: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    title: "Vinterjacka",
    description:
      "Varm choklad, pulka och snö med dig. Hoppas du vill gå ut i kylan med mig",
    url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  },

  {
    title: "Termobyxor",
    description:
      "När det är så kul att man inte vill gå in. Ta på dessa och du är både varm och fin. Skidor, pulka och massa bus. Ner för backen med ett sus",
    url: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },

  {
    title: "Innebandyklubba",
    description:
      "Du är väldigt bra på att laga mat. Men också ganska lat. Med denna gåva hoppas jag du ska börja spela. Det är bara att sätta igång, sluta vela",
    url: "https://images.unsplash.com/photo-1545471977-94cac22e71ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Parfym",
    description: "En droppe eller två. Det blir bäst så",
    url: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },

  {
    title: "Joggingoverall",
    description:
      "I dessa slipper du frysa. När du efter träningen vill mysa. Med sköna muddar och resår. Är det bara julefriden som består",
    url: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  },

  {
    title: "Padelracket",
    description:
      "Se till att träffa när bollen faller. Men passa dig för nät och galler . Svettigt, poppis och väldigt kul. Perfekt att motverka matkoman i jul",
    url: "https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Löparskor",
    description:
      "Intervaller, distanslöpning och utfallshopp. Kanske blir du inspirerad till ett lopp. Träning ger mer än muskler och stark rumpa. Starkare skelett, energi och får hjärtat att pumpa",
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Pulsklocka",
    description:
      "Hur många steg blir det på en dag?. Kanske dags att höja pulsen ett tag?. Oavsett vad du vill göra. Bara att knäppa på och börja köra",
    url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  },

  {
    title: "Yogamatta",
    description:
      "Du behöver balans och lugn energi. Efteråt kommer du känna dig helt fri. Solhälsningar, ner i brygga och stå på ett ben. Smidig, avslappnad och allt annat än klen",
    url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
  },

  {
    title: "Playstation",
    description:
      "Höger, vänster, upp och ner, följ uppmaningarna som du på tv-rutan ser. Ett hopp, en piruett, svetten rinner, är man en som med i leken hinner, är man den som tävlingen vinner!",
    url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Träningsväska",
    description:
      "Den bästa träningen är den som blir av. Så länge du inte har ont i halsen eller skoskav. Packa väskan dagen innan .Och njut ordentligt av träningstimman",
    url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    title: "Idrottskläder",
    description:
      "Hockey, fotboll och mycket nytt du vill testa. Träning är skoj men match är det bästa. Med bra grejer blir de svåra sakerna lätta. Men när ska du lära dig att tvätta?",
    url: "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Tröja",
    description:
      "Precis som paketen är du mysig och mjuk. För fredagsmys, skogstur eller om du ligger hemma och är sjuk",
    url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Handskar",
    description:
      "Ibland trillar du men ofta lyckas du stå. Frusna fingrar är aldrig kul att få. Då är detta skönt på dina händer. Oavsett om du åker i Sverige eller andra länder",
    url: "https://images.unsplash.com/photo-1617118602199-d3c05ae37ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },

  {
    title: "Ishockeyhjälm ",
    description:
      "Det är på rinken det händer. Akta huvud, näsa och tänder. Luktar lite illa, det hör till.Tvätta får du göra, fastän du inte vill",
    url: "https://images.unsplash.com/photo-1632649177996-a4fbcae82d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    title: "Skidor",
    description:
      "Att du redan lärt dig hur man gör. Du hoppar av liften och bara kör. För att bli bättre du mycket övar. Utvecklas och nya saker prövar",
    url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
  },

  {
    title: "Joggingbyxor",
    description:
      "Cool, häftig och tuff. Att du blivit så stor känns som en bluff. Jag kan inte förstå att du blivit 10 år. När du var liten, det känns som igår",
    url: "https://images.unsplash.com/photo-1608585617748-d55938680e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },

  {
    title: "Sneakers",
    description:
      "Sköna, snabba och snygga par till dig. Oavsett om du är kille eller tjej. Hoppas att foten är korrekt mätt. Och att märke och färg ska vara rätt",
    url: "https://images.unsplash.com/photo-1508125207376-764c000e04c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
  },

  {
    title: "Stövlar",
    description:
      "Finns det något sötare än barn som är små. Som med gummistövlar på precis lärt sig gå",
    url: "https://images.unsplash.com/photo-1582897085656-c636d006a246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },

  {
    title: "Pingisrack",
    description:
      "Som du ser på formen är detta ett rack. Ge mig en kram och säg tack",
    url: "https://images.unsplash.com/photo-1529316464151-695eb09f22a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },

  {
    title: "Bok",
    description: "Nu ska du bli klok.. ",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80",
  },

  {
    title: "Vinteroverall",
    description:
      "Med barn som är kalla och våta Finns stor risk att de börja gråta. En kropp som är torr och varm är mer kul. Då passar dessa bra under granen i jul",
      url: "https://images.unsplash.com/photo-1603793303277-ed67787545e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
];

function App() {

  function playAudio() {
    var audio = document.getElementById("audio");
        audio.play();
  }

  return (
    

    <div className="container-fluid">
      <figure>
        <figcaption></figcaption>
        <audio id="audio"
             loop autoplay
            src="/mp3/xmas.mp3">
                Your browser does not support the
                <code>audio</code> element.
        </audio>
    </figure>
      <nav className="header">
        <div className="d-flex flex-row justify-content-around">
           <p><img  className="tomte" src="https://cdn1.iconfinder.com/data/icons/christmas-related-filled/64/christmas-25-512.png" alt="tomte"/></p>
          <h1>NisseGram</h1>
          <input type="text" className="rounded-pill text-center border-1" placeholder="Search.."></input>
          <button className="btn btn-light rounded-pill">Log in</button>
        </div>
        {/* <div className="col-1"></div> */}
        {/* <div className="col-1"></div> */}
      </nav>
      <div className="row">
        
        {
          data.map((item, index) => {
            return <Card
              key={index}
              imageUrl={item.url}
              description={item.description}
              playAudio={playAudio}
              
              cardNumber={index+1}
            />
          })
        }
        
      </div>
    </div>
  );
}

export default App;
