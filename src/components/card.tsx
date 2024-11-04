import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

export const MyCard = (prop: {title: string , description: string , href: string, image: string, badge: string, date: string}) => (
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={prop.image}
    theme={{root:{children:"flex h-full flex-col justify-start gap-4 p-6"}}}
  >
    <div className="flex flex-col gap-2 justify-start items-start">
      <div>
        <Badge className="w-fit capitalize">{prop.badge}</Badge>
        <span className="text-xs font-semibold">{showFormattedDate(prop.date)}</span>
      </div>

      <h5 className="lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
        {prop.title}
      </h5>
      <p className="text-sm lg:text-md font-normal text-gray-700 dark:text-gray-400 line-clamp-3" dangerouslySetInnerHTML={{__html: prop.description}}></p>

      <Link to={prop.href}>
        <Button>
          Read more
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </Card>
)
