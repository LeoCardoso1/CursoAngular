
import './App.css';
import MyForm from './components/MyForm';

function App() {
    return(
    <div className="App">
        <MyForm user={{name: "Dominique", email: "dominiquequeque@ahs.com.br"}}/>
    </div>
    );
}

export default App;
