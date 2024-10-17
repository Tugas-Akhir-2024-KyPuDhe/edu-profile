import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card } from "flowbite-react";

export const MyCard = () => {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite-react.com/images/blog/image-1.jpg"
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      <div>
        <Button className="">
            Read more
            <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
}
