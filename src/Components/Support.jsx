import React from "react";
import {
  PhoneIcon,
  ArrowSmallRightIcon,
  ChatBubbleOvalLeftIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import {} from "@heroicons/react/24/solid";

import supportImg from "../Assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <figure className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportImg}
          alt="Support"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </figure>
      <section className="max-w-[1240px] mx-auto text-white relative">
        <main className="px-4 py-12">
          <h2 className="pt-8 text-slate-300 uppercase text-center text-xl sm:text-3xl">
            Support
          </h2>
          <h3 className="text-3xl sm:text-3xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-1xl sm:text-xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            sit nesciunt reprehenderit, ut dolore nemo quae aliquam. Excepturi
            amet eaque alias veniam, ratione officiis magnam possimus earum id
            nulla vero reiciendis error ea quidem recusandae.
          </p>
        </main>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <main className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati qui consectetur explicabo eligendi odio, eveniet hic
                sit impedit porro culpa.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </main>
          <main className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <ChatBubbleOvalLeftIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati qui consectetur explicabo eligendi odio, eveniet hic
                sit impedit porro culpa.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </main>
          <main className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati qui consectetur explicabo eligendi odio, eveniet hic
                sit impedit porro culpa.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Support;
