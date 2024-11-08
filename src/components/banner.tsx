import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

export const MyBanner = (prop: {title:string, currentPage: string, beforePages: {title: string, href: string}[]}) => {
    return (
      <div>
        <div className="relative isolate px-6 lg:px-8 mx-auto py-24 bg-green-300">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {prop.title}
              </h1>

                <Breadcrumb className="flex justify-center mt-5 text-gray-900">
                  {prop.beforePages.map((page)=>(
                    <Breadcrumb.Item key={page.title} theme={{
                      href : {
                        on: "text-lg text-gray-600 hover:text-gray-800 font-medium"
                          }
                      }}>
                        <Link className="text-lg text-gray-600 hover:text-gray-800 font-medium" to={page.href}>
                          {page.title}
                        </Link>
                      </Breadcrumb.Item>
                  ))}
                    
                    <Breadcrumb.Item theme={{
                        chevron : "text-gray-900 mx-1 h-4 w-4",
                        href : {
                            off: "text-lg text-gray-900 font-medium"
                        }
                    }}>
                        {prop.currentPage}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>


      </div>
    );
  };
  