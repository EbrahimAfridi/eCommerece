import {InstagramLogo, TwitterLogo} from "phosphor-react";
import "./Footer.css";
const Footer = () => {
    return(
        <footer className="flex flex-row selection:bg-white gap-2 bg-black text-white py-20 pl-10 pr-0">
            <div className="basis-[40%] selection:text-black">
                <h3 className="text-3xl font-bold mb-2">SneakEarth</h3>
                <p className="text-lg">Explore the world of sneakers.</p>
            </div>
            <div className="basis-[20%] selection:text-black">
                <p className="mb-5">
                    <span className="text-xl mb-2 hover:text-[#d3d3d3]">About</span>
                </p>
                <p>
                    <span className="hover:text-[#d3d3d3]">About us</span>
                </p>
                <p>
                    <span className="hover:text-[#d3d3d3]">Features</span>
                </p>
                <p>
                    <span className="hover:text-[#d3d3d3]">News & Blog</span>
                </p>
            </div>
            <div className="basis-[20%] selection:text-black">
                <p className="mb-5">
                    <span className="text-xl mb-2 hover:text-[#d3d3d3]">Connect</span>
                </p>
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
                <p className="mb-5">
                    <span className="text-xl mb-2 hover:text-[#d3d3d3]">Support</span>
                </p>
            <p>
                    <span className="hover:text-[#d3d3d3]">FAQs</span>
                </p>
                <p>
                    <span className="hover:text-[#d3d3d3]">Support Center</span>
                </p>
                <p>
                    <span className="hover:text-[#d3d3d3]">Contact us</span>
                </p>
            </div>
        </footer>
    )
}
export default Footer;