import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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

export default () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            if (item.children.length) {
              return (
                <Popover className="relative" key={item.name}>
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-3">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          className="block rounded-lg py-2 px-3 transition hover:text-gray-900 text-gray-400"
                          href={child.href}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              );
            } else {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              );
            }
          })}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  if (item.children.length) {
                    return (
                      <Disclosure as="div" className="-mx-3" key={item.name}>
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {item.children.map((child) => (
                            <DisclosureButton
                              key={child.name}
                              as="a"
                              href={child.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {child.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    );
                  } else {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
