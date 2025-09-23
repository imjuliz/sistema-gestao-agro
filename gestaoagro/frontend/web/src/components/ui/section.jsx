import React from "react";
import { cn } from "@/lib/utils";

function Section(props) {
  const { className, ...rest } = props;

  return (
    <section
      data-slot="section"
      className={cn(
        "bg-background text-foreground px-4 py-12 sm:py-24 md:py-32",
        className
      )}
      {...rest}
    />
  );
}

export { Section };
