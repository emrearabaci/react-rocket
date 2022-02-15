import './styles/App.css';

function App() {
  document.title = 'React Rocket';
  return (
    <div>
      <div className="greetings">
        <h2 data-testid="header">react rocket</h2>
      </div>
    </div>
  );
}

export default App;
