import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './Components/DefaultPage';
import Home from './Pages/Home';

function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
