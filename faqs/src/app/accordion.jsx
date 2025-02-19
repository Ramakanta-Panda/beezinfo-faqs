import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionLeft() {
    return (
        <Accordion type="single" collapsible className="w-full bg-white border-2 shadow">
            <AccordionItem value="item-1">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Get Discovered</AccordionTrigger>
                <AccordionContent className="p-4">
                    Our platform helps you reach a broader audience and get noticed by potential customers.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Grow Your Business</AccordionTrigger>
                <AccordionContent className="p-4">
                    Use our tools and resources to scale your business and improve your revenue streams.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white"> Increase Visibility</AccordionTrigger>
                <AccordionContent className="p-4">
                    We optimize your presence across multiple channels to ensure maximum exposure.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white"> Attract More Customers</AccordionTrigger>
                <AccordionContent className="p-4">
                    Leverage our marketing strategies to bring in more customers to your business.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">  Boost Online Presence</AccordionTrigger>
                <AccordionContent className="p-4">
                    Our SEO and digital marketing strategies help improve your online reputation.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export function AccordionRight() {
    return (
        <Accordion type="single" collapsible className="w-full bg-white border-2 shadow">
            <AccordionItem value="item-1">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Connect with Clients</AccordionTrigger>
                <AccordionContent className="p-4">
                    Engage with potential clients and build lasting relationships through our platform.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Grow Revenue</AccordionTrigger>
                <AccordionContent className="p-4">
                    Utilize our growth tools to maximize your earnings and expand your market share.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Improve Search Rankings</AccordionTrigger>
                <AccordionContent className="p-4">
                    Our SEO strategies help you rank higher in search results and attract organic traffic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Build a Strong Reputation</AccordionTrigger>
                <AccordionContent className="p-4">
                    Maintain a strong brand image and reputation with our reputation management tools.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="px-2 py-4 hover:no-underline transition-all bg-white text-black data-[state=open]:bg-[#004274] data-[state=open]:text-white">Get Personalized Support</AccordionTrigger>
                <AccordionContent className="p-4">
                    Our dedicated support team is here to help you with any queries or assistance you need.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
