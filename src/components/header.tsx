import {  Dropdown, Navbar } from "flowbite-react";

const navigation = [
  { name: "Beranda", href: "#", children: [] },
  {
    name: "Informasi",
    href: "#",
    children: [
      { name: "Visi dan Misi", href: "#" },
      { name: "Fasilitas", href: "#" },
      { name: "Galeri", href: "#" },
    ],
  },
  {
    name: "Konten",
    href: "#",
    children: [
      { name: "Berita", href: "#" },
      { name: "Acara", href: "#" },
    ],
  },
  { name: "Ekstrakurikuler (Ekskul)", href: "#", children: [] },
  { name: "Jurusan", href: "#", children: [] },
  { name: "Tentang Sekolah", href: "#", children: [] },
];

export const Header = () => {
    
  return (
    <Navbar fluid rounded className="sticky top-0">
      <Navbar.Brand href="#">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SMK Negeri 1 Lumban Julu</span>
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
                        <span className="w-full text-start block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                            {item.name}
                        </span>
                    }
                    >
                    {item.children.map((child) => (
                        <Dropdown.Item as={'a'} key={child.name} href={child.href}>{child.name}</Dropdown.Item>
                    ))}
                </Dropdown>
              );
            } else {
              return (
                <Navbar.Link key={item.name} href={item.href}>
                    {item.name}
                </Navbar.Link>
              );
            }
          })}
      </Navbar.Collapse>
    </Navbar>

  );
};
