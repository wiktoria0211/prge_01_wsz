import logo from "./logo.svg";
import "./App.css";

const lista_uzytkownikow = [
  { imie: "Monika" },
  { imie: "Wiktoria" },
  { imie: "Mateusz" },
];

console.log(lista_uzytkownikow);

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
