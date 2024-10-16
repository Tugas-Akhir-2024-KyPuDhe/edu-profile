import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function MyFooter() {
  return (
    <Footer container>
      <div className="w-full bg-dark">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              name="SMK Negeri 1 Lumban Julu"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Beranda</Footer.Link>
                <Footer.Link href="#">Visi dan Misi</Footer.Link>
                <Footer.Link href="#">Fasilitas</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Galeri</Footer.Link>
                <Footer.Link href="#">Berita</Footer.Link>
                <Footer.Link href="#">Acara</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Ekstrakurikuler (Ekskul)</Footer.Link>
                <Footer.Link href="#">Jurusan</Footer.Link>
                <Footer.Link href="#">Tentang Sekolah</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="SMK Negeri 1 Lumban Julu" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
