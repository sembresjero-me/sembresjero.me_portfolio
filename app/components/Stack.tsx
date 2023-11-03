"use client";

import Image from "next/image";

// Logo imports
import cssLogo from "@/public/stack/css.svg";
import htmlLogo from "@/public/stack/html.svg";
import javascriptLogo from "@/public/stack/javascript.svg";
import nextjsLogo from "@/public/stack/next-js.svg";
import prestashopLogo from "@/public/stack/prestashop.svg";
import reactLogo from "@/public/stack/react.svg";
import shopifyLogo from "@/public/stack/shopify.svg";
import tailwindLogo from "@/public/stack/tailwind.svg";
import typescriptLogo from "@/public/stack/typescript.svg";
import webflowLogo from "@/public/stack/webflow.svg";
import wordpressLogo from "@/public/stack/wordpress.svg";

interface StackProps {}

const Stack: React.FC<StackProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6 gap-4 justify-items-center items-center w-full min-h-[50svh] mb-32">
        <div className="col-span-4 row-span-4 bg-cream rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-body text-3xl leading-tight">React</h4>
            <Image
              src={reactLogo}
              width={65}
              height={65}
              alt="React Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-2 col-start-5 row-span-2 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">HTML</h4>
            <Image
              src={htmlLogo}
              width={65}
              height={65}
              alt="HTML Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-2 col-start-7 row-span-2 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">CSS</h4>
            <Image
              src={cssLogo}
              width={65}
              height={65}
              alt="CSS Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-4 col-start-9 row-span-3 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">
              JavaScript
            </h4>
            <Image
              src={javascriptLogo}
              width={65}
              height={65}
              alt="JavaScript Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-4 col-start-9 row-span-3 row-start-4 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">
              Typescript
            </h4>
            <Image
              src={typescriptLogo}
              width={65}
              height={65}
              alt="Typescript Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-4 row-span-2 row-start-5 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">Tailwind</h4>
            <Image
              src={tailwindLogo}
              width={65}
              height={65}
              alt="Tailwind Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="col-span-4 col-start-5 row-span-4 row-start-3 bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">Next.js</h4>
            <Image
              src={nextjsLogo}
              width={65}
              height={65}
              alt="Next.js Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center items-center w-full min-h-[20svh] mb-32">
        <div className="bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">WordPress</h4>
            <Image
              src={wordpressLogo}
              width={65}
              height={65}
              alt="WordPress Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">Shopify</h4>
            <Image
              src={shopifyLogo}
              width={65}
              height={65}
              alt="Shopify Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">Webflow</h4>
            <Image
              src={webflowLogo}
              width={65}
              height={65}
              alt="Webflow Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-12 w-full h-full">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-stretch items-stretch auto-rows-max h-full">
            <h4 className="text-[#0e100f] text-3xl leading-tight">
              Prestashop
            </h4>
            <Image
              src={prestashopLogo}
              width={65}
              height={65}
              alt="Prestashop Logo"
              className="justify-self-end self-end"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
