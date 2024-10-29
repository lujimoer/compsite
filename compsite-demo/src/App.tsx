import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Card>
        <Card.Haeder>card标题</Card.Haeder>
        <Card.Content>neirong</Card.Content>
        <Card.Footer>
          <div className="footer-btn">
            <button>取消</button>
            <button>确认</button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;
