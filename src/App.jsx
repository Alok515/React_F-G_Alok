import FeedBack from './FeedBack'
import { Table } from './components/Table'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={FeedBack} />
                <Route path="/table" component={Table} />
            </Routes>
        </Router>
    );
}

export default App;