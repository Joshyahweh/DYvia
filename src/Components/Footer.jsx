import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <section className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
        <main className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          <div>
            <h4 className="font-bold uppercase">Solutions</h4>
            <div className="pl-3">
              <ul>
                <li className="py-1">Marketing</li>
                <li className="py-1">Analytics</li>
                <li className="py-1">Commerce</li>
                <li className="py-1">Data</li>
                <li className="py-1">Cloud</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase">Supports</h4>
            <div className="pl-3">
              <ul>
                <li className="py-1">Pricing</li>
                <li className="py-1">Documentation</li>
                <li className="py-1">Guide</li>
                <li className="py-1">API Status</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase">Company</h4>
            <div className="pl-3">
              <ul>
                <li className="py-1">About</li>
                <li className="py-1">Blog</li>
                <li className="py-1">Jobs</li>
                <li className="py-1">Press</li>
                <li className="py-1">Partners</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase">Legal</h4>
            <div className="pl-3">
              <ul>
                <li className="py-1">Claims</li>
                <li className="py-1">Privacy</li>
                <li className="py-1">Terms</li>
                <li className="py-1">Policies</li>
                <li className="py-1">Conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 pt-8 md:pt-2">
            <h4 className="font-bold uppercase">Subscribe to our newsletter</h4>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form action="" className="flex flex-col sm:flex-row">
              <input
                type="email"
                className="w-full p-2 mr-4 rounded-md mb-4"
                placeholder="Enter email"
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </main>
        <div className="flex flex-col max-w-[1240] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2022 Joshua Ojoawo, LLC. All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaTwitch className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
