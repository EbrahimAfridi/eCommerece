import "./Dropdown.css";
import {List} from "phosphor-react";

const Dropdown = () => {
    function toggleDropdown() {
        let dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
    }

    return(
        <div className="relative inline-block">
            <button className="px-2 py-2 text-gray-700 rounded-md focus:outline-none cursor-pointer"
                    onClick={toggleDropdown}>
                <List size={28} color="#fff" weight="fill" />
            </button>
            <ul className="absolute cursor-pointer left-2 mt-2 bg-black rounded-md py-1 px-3 text-white text-sm hidden"
                id="dropdownMenu">
                <li className="py-1">Sneakers</li>
                <li className="py-1">Slides</li>
                <li className="py-1">Sandals</li>
            </ul>
        </div>

    )
}

export default Dropdown;