import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SamplePage from '@pages/SamplePage';
import NotFoundPage from '@pages/NotFoundPage';
import Header from '@components/Header';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/sample" element={<SamplePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
