/* Making component for animal card */
function AnimalName(props) {
  return (
    <div className="animalCard">
      <p>{props.animalName}</p>
      <button>Click</button>
    </div>
  );
}

/* all below will be shown on the page */
function App() {
  return (
    <div className="App">
      <AnimalName animalName="Snow Owl" />
    </div>
  );
}

export default App;
