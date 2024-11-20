"use client";
import React, { useEffect, useState } from "react";

export default function HydrationError({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? <>{children}</> : null;
}
