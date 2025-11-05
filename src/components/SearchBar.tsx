import {Input, InputGroup} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchBar = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}>
            <InputGroup flex="1" startElement={<BsSearch size={20}  />}>
                <Input
                    ref={ref}
                    borderRadius={5}
                    placeholder='Search games...'
                    variant='flushed'
                />
            </InputGroup>
        </form>
    );
};

export default SearchBar;