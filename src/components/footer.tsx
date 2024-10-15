export const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 bg-gray-800">
      <div className="flex items-center justify-between p-6 lg:px-8">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023 SMK Negeri 1 Lumban Julu. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
