import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import SearchBar from "@/components/SearchBar.tsx";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} alt="logo" boxSize='60px' />
            <SearchBar onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;