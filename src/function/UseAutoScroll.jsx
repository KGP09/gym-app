import { useEffect } from "react";

function UseAutoScr(element, data) {
}

export default useScrollToBottom;


import React from 'react'

export default function UseAutoScroll() {
    const scrollToBottom = () => {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    
    useEffect(() => {
      scrollToBottom();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
  return (
    <div>
      
    </div>
  )
}
