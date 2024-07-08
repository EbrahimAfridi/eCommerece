import "./Footer.css";
import React from 'react';
import SubscribeForm from './SubscribeForm.jsx';

const Footer = () => {

  return(
        <footer className="flex flex-col gap-2 px-4 py-10 mt-[120px] text-white bg-black sm:pl-10 sm:pr-[0px] sm:py-[110px] sm:flex-row selection:bg-white">
            <div className="basis-[40%] selection:text-black">
                <h3 className="mb-2 text-3xl font-bold">SneakEarth</h3>
                <p className="text-lg">Explore the world of sneakers.</p>
                {/*NewsLetter*/}
                <SubscribeForm />
            </div>
            <div className="basis-[20%] selection:text-black">
                <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mt-4 sm:mt-0 sm:mb-2 mb-0 hover:text-[#d3d3d3]">About</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">About us</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Features</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">News & Blog</p>
                </div>
            </div>
            <div className="basis-[20%] selection:text-black">
            <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mb-2 hover:text-[#d3d3d3]">Connect</p>
                </div>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://www.linkedin.com/in/ebrahim-afridi-83188b219/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://twitter.com/EbrahimAfridi3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </p>
                <p>
                    <a
                        className="hover:text-[#d3d3d3]"
                        href="https://www.instagram.com/ebrahim_afridi12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </p>
            </div>
            <div className="basis-[20%] selection:text-black">
            <div className="mt-4 mb-3 sm:mb-5 sm:mt-0">
                    <p className="text-xl mb-2 hover:text-[#d3d3d3]">Support</p>
                </div>
            <   div>
                    <p className="hover:text-[#d3d3d3]">FAQs</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Support Center</p>
                </div>
                <div>
                    <p className="hover:text-[#d3d3d3]">Contact us</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;