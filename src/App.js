
import BaiTapDienThoaiRedux from "./Components/Redux/BaiTapDienThoai1/BaiTapDienThoai1";
import BaiTapThuDo from "./Components/Redux/BaiTapThuDo/BaiTapThuDo";
import LifeCycle from "./Components/LifeCycle/LifeCycle";
import BaiTapQuanLyNguoidung from "./Components/BaiTapQuanLyNguoidung/BaiTapQuanLyNguoidung";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import HeaderRouter from "./Components/HeaderRouter/HeaderRouter";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Router from "./Router";
import Hooks from "./Pages/Hooks/Hooks";
import AdminLayout from "./Layouts/AdminLayout";

function App() {
  return (
    <div className="App container-fluid">
      {/* Buổi 4 */}
      {/* <DemoRedux /> */}
      {/* <BaiTapDienThoaiRedux /> */}

      {/* Buổi 5+6 */}
      {/* <BaiTapThuDo /> */}

      {/* Buổi 7 */}
      {/* <LifeCycle /> */}

      {/* Buổi 8 */}
      {/* <BaiTapQuanLyNguoidung /> */}

      {/* Buổi 9 */}
      <BrowserRouter>
      {/* <HeaderRouter /> */}
      {/* version 5 */}
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/movie-detail" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}

        {/* version 6 */}
        <Router />
      </BrowserRouter>

    </div>
  );
}

export default App;
