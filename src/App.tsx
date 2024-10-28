import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, Berita, Acara, VisiMisi } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informasi/visi-misi" element={<VisiMisi />} />
        <Route path="/informasi/fasilitas" element={<HomePage />} />
        <Route path="/informasi/galeri" element={<HomePage />} />
        <Route path="/konten/berita" element={<Berita />} />
        <Route path="/konten/acara" element={<Acara />} />
        <Route path="/ekstrakurikuler" element={<HomePage />} />
        <Route path="/jurusan" element={<HomePage />} />
        <Route path="/tentang-sekolah" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;