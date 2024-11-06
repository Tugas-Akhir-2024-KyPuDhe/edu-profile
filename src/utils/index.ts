import { MutableRefObject, useEffect, useState } from "react";

const showFormattedDate = (date: string) => {
    return new Date(date).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
  }

  const useIsVisible = (ref: MutableRefObject<Element | null>) => {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current!);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }
  
  export { showFormattedDate, useIsVisible };