"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Plus, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 text-start text-lg items-center justify-between pt-8 font-medium transition-all data-[state=open]:bg-[#080821] lg:px-8 group",
        className
      )}
      {...props}
    >
      {children}
      <div className="bg-[#8D58FF] h-9 w-9 rounded-full flex items-center justify-center">
        <Plus
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden"
          color="white"
        />
        <Minus
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden"
          color="white"
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden pt-6 text-[#8B8B8B] bg-[#080821] leading-[-2em] text-sm text-start transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-8 pb-4"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
