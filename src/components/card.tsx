import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Badge } from "flowbite-react";
import { Link } from "react-router-dom";

export const MyCard = (prop: {title: string , description: string , href: string, image: string, badge: string}) => (
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={prop.image}
  >

    <Badge className="w-fit">{prop.badge}</Badge>

    <h5 className="lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
      {prop.title}
    </h5>
    <p className="text-sm lg:text-md font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
      {prop.description}
    </p>

    <Link to={prop.href}>
      <Button>
        Read more
        <ChevronRightIcon className="ml-2 h-5 w-5" />
      </Button>
    </Link>
  </Card>
)
