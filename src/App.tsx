import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, Berita, Acara, VisiMisi, Tentang, Jurusan, Ekskul, Fasilitas, Galeri, DetailBerita } from "./pages";
import { DetailAcara } from "./pages/konten/acara/[id]";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informasi/visi-misi" element={<VisiMisi />} />
        <Route path="/informasi/fasilitas" element={<Fasilitas />} />
        <Route path="/informasi/galeri" element={<Galeri />} />
        <Route path="/konten/berita" element={<Berita />} />
        <Route path="/konten/berita/:id" element={<DetailBerita />} />
        <Route path="/konten/acara" element={<Acara />} />
        <Route path="/konten/acara/:id" element={<DetailAcara />} />
        <Route path="/ekstrakurikuler" element={<Ekskul />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/tentang-sekolah" element={<Tentang />} />
      </Routes>
    </>
  );
}

export default App;