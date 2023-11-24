"use client";

import Stack from "@/app/components/Stack";

interface StacksProps {}

const Stacks: React.FC<StacksProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6 gap-4 justify-items-center items-center w-full min-h-[50svh] mb-32">
        <div className="col-span-4 row-span-4 bg-cream rounded-custom p-8 w-full h-full">
          <Stack
            title="React"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-react.svg"
          />
        </div>
        <div className="col-span-4 row-span-2 row-start-5 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="Tailwind"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-tailwind.svg"
          />
        </div>
        <div className="col-span-4 col-start-5 row-span-2 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="HTML"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-html.svg"
          />
        </div>
        <div className="col-span-4 col-start-5 row-span-2 row-start-3 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="CSS"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-css.svg"
          />
        </div>
        <div className="col-span-4 col-start-5 row-span-2 row-start-5 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="JavaScript"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-javascript.svg"
          />
        </div>
        <div className="col-span-4 col-start-9 row-span-2 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="TypeScript"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-typescript.svg"
          />
        </div>
        <div className="col-span-4 col-start-9 row-span-4 row-start-3 bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="Next.js"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-next-js.svg"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-items-center items-center w-full min-h-[20svh] mb-32">
        <div className="bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="WordPress"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-wordpress.svg"
          />
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="Shopify"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-shopify.svg"
          />
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="Webflow"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-webflow.svg"
          />
        </div>
        <div className="bg-[#FFFCE1] rounded-custom p-8 w-full h-full">
          <Stack
            title="Prestashop"
            image="https://s3.eu-west-3.amazonaws.com/sembresjero.me/stack/sembresjero-me-stack-logo-prestashop.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Stacks;
