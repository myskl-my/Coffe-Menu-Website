"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** image with fallback */
export function MenuImage({ src, alt, className = "", sizes, priority }: Props) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => {
        if (!failed) {
          setFailed(true);
          setCurrent("/images/menu/cover-beverage.svg");
        }
      }}
    />
  );
}
