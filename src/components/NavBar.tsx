import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchBar from "@/components/SearchBar.tsx";

const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo} alt="logo" boxSize='60px' />
            <SearchBar/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;