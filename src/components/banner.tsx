import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

export const MyBanner = (prop: {title:string, currentPage: string, beforePages: {title: string, href: string}[]}) => {
    return (
      <div>
        <div className="relative isolate px-6 lg:px-8 mx-auto py-24 bg-[#1E7DC1]">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                {prop.title}
              </h1>

                <Breadcrumb className="flex justify-center mt-5 text-slate-100">
                  {prop.beforePages.map((page)=>(
                    <Breadcrumb.Item key={page.title} theme={{
                      href : {
                        on: "text-lg text-slate-100 hover:text-gray-800 font-medium"
                          }
                      }}>
                        <Link className="text-lg text-slate-400 hover:text-slate-100 font-medium" to={page.href}>
                          {page.title}
                        </Link>
                      </Breadcrumb.Item>
                  ))}
                    
                    <Breadcrumb.Item theme={{
                        chevron : "text-slate-100 mx-1 h-4 w-4",
                        href : {
                            off: "text-lg text-slate font-medium"
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
  