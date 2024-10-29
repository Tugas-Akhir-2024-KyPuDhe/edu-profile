import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, Berita, Acara, VisiMisi, Tentang, Jurusan, Ekskul, Fasilitas, Galeri } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informasi/visi-misi" element={<VisiMisi />} />
        <Route path="/informasi/fasilitas" element={<Fasilitas />} />
        <Route path="/informasi/galeri" element={<Galeri />} />
        <Route path="/konten/berita" element={<Berita />} />
        <Route path="/konten/acara" element={<Acara />} />
        <Route path="/ekstrakurikuler" element={<Ekskul />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/tentang-sekolah" element={<Tentang />} />
      </Routes>
    </>
  );
}

export default App;