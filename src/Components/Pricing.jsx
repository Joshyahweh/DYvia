import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white py-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <main className="max-w-[1240px] mx-auto text-center py-12 text-slate-300">
        <h2 className="text-xl py-8 uppercase">Pricing</h2>
        <strong className="text-3xl sm:text-5xl text-white">
          The right price for your research
        </strong>
        <p className="text-1xl sm:text-xl py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dolore
          illum quos sapiente vitae placeat esse quod numquam sint repellendus?
        </p>

        <section className="grid md:grid-cols-2">
          <main className="bg-white text-slate-900 m-4 shadow-2xl relative rounded-xl p-8">
            <span className="bg-indigo-200 uppercase w-fit py-1 px-3 rounded-full text-slate-500 text-sm">
              Standard
            </span>
            <div className="flex py-4">
              <strong className="text-6xl">$49</strong>
              <p className="flex flex-col justify-end text-slate-400 font-bold text-xl">
                /mo
              </p>
            </div>
            <p className="text-slate-500 text-1xl sm:text-2xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <button className="w-full py-4 my-4">Get Started</button>
          </main>
          <main className="bg-white text-slate-900 m-4 shadow-2xl relative rounded-lg p-8">
            <div>
              <h4 className="bg-indigo-200 uppercase w-fit py-1 px-3 rounded-full text-slate-500 text-sm">
                Standard
              </h4>
              <span className="flex pt-5 pb-20">
                <strong className="text-6xl">$49</strong>
                <p className="flex flex-col justify-end text-slate-400 font-bold text-2xl">
                  /mo
                </p>
              </span>
              <p className="text-gray-400 text-1xl sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex py-4">
              <CheckIcon className="w-7 mr-4 text-green-600" />
              <p className="text-1xl sm:text-xl">Lorem, ipsum dolor.</p>
            </div>
            <button className="w-full py-4 my-4">Get Started</button>
          </main>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
