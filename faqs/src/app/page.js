"use client";
import Image from "next/image";
import { AccordionLeft, AccordionRight } from "./accordion";

export default function FAQPage() {
  return (
    <section className="bg-[#f8f9fa] h-screen">
      <div className="container mx-auto px-3 py-10 max-w-7xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">FAQs</h1>
        <p className="text-center mb-10">Frequently Asked Questions.</p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <AccordionLeft />
        <AccordionRight />
        </div>
      </div>
      
    </section>
  );
}
