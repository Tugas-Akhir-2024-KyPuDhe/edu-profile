import { Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Beranda", href: "/", children: [] },
  {
    name: "Informasi",
    href: "informasi",
    children: [
      { name: "Visi dan Misi", href: "/informasi/visi-misi" },
      { name: "Fasilitas", href: "/informasi/fasilitas" },
      { name: "Galeri", href: "/informasi/galeri" },
    ],
  },
  {
    name: "Konten",
    href: "/konten",
    children: [
      { name: "Berita", href: "/konten/berita" },
      { name: "Acara", href: "/konten/acara" },
    ],
  },
  { name: "Ekstrakurikuler (Ekskul)", href: "/ekstrakurikuler", children: [] },
  { name: "Jurusan", href: "/jurusan", children: [] },
  { name: "Tentang Sekolah", href: "/tentang-sekolah", children: [] },
];

export const Header = () => {

  
  const location = useLocation();

  return (
    <Navbar fluid rounded className="sticky top-0 z-20 shadow">
      <Navbar.Brand href="#">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SMK Negeri 1 Lumban Julu
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        {navigation.map((item) => {
          if (item.children.length) {
            return (
              <Dropdown
                key={item.name}
                inline
                placement="bottom"
                label={
                  <span className={"w-full text-start block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white" + (location.pathname.includes(item.href) ? ' text-cyan-700' : ' text-gray-700')}>
                    {item.name}
                  </span>
                }
              >
                {item.children.map((child) => (
                  <Link to={child.href}>
                    <Dropdown.Item as={"a"} key={child.name}>
                      {child.name}
                    </Dropdown.Item>
                  </Link>
                ))}
              </Dropdown>
            );
          } else {
            return (
              <Navbar.Link key={item.name} active={location.pathname==item.href}>
                <Link to={item.href}>{item.name}</Link>
              </Navbar.Link>
            );
          }
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};
