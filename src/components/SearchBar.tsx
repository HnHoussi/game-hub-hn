import {Input, InputGroup} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const SearchBar = () => {
    return (
        <InputGroup flex="1" startElement={<BsSearch size={20}  />}>
            <Input
                borderRadius={20}
                placeholder='Search games...'
                variant='subtle'
            />
        </InputGroup>
    );
};

export default SearchBar;