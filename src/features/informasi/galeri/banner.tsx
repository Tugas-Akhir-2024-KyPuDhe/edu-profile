import { Breadcrumb } from "flowbite-react";

export const MyBanner = () => {
    return (
      <div>
        <div className="relative isolate px-6 lg:px-8 mx-auto py-24 bg-orange-300">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Galeri
              </h1>

                <Breadcrumb className="flex justify-center mt-5 text-gray-900">
                    <Breadcrumb.Item href="/" theme={{
                        href : {
                            on: "text-lg text-gray-600 hover:text-gray-800 font-medium"
                        }
                    }}>
                        Beranda
                    </Breadcrumb.Item>
                    <Breadcrumb.Item theme={{
                        chevron : "text-gray-900 mx-1 h-4 w-4",
                        href : {
                            off: "text-lg text-gray-900 font-medium"
                        }
                    }}>
                        Galeri
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>


      </div>
    );
  };
  