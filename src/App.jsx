import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage/index.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDot } from 'react-loading-indicators';

const AboutPage = React.lazy(() => import('./pages/About/index.jsx'));
const ArticlePage = React.lazy(() => import('./pages/Articles/index.jsx'));
const ContackPage = React.lazy(() => import('./pages/Contact/index.jsx'));
const NewsPage = React.lazy(() => import('./pages/News/index.jsx'));
import { Footer } from './components/Footer';
import { TeamSection } from './pages/MemberAbout/index.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col max-w-[1700px] m-auto ">
        <Header />
        <main className="flex-1">
          <Suspense fallback={
            <div className="flex justify-center items-center h-[80vh]">
              <ThreeDot 
                variant="bounce" 
                color="#009688"
                size="large"
              />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlePage />} />
              <Route path="/contact" element={<ContackPage />} />
              <Route path='/member' element={<TeamSection />} />
              <Route path="/news/:id" element={<NewsPage />} />
            </Routes>
          </Suspense>
        </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;