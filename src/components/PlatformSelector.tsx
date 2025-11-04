import {Button, Menu, Portal} from "@chakra-ui/react"
import usePlatforms from "@/hooks/usePlatforms.ts";
import type {Platform} from "@/hooks/useGames.ts";
import {RiArrowDownWideLine} from "react-icons/ri";

interface Props {
    onSelectPlatform: (platform: Platform ) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const { data, error } = usePlatforms();

    if(error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button size="sm" variant="outline">
                    {selectedPlatform?.name || 'Platform' } <RiArrowDownWideLine />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data?.map((platform) => (
                            <Menu.Item
                                value={platform.name}
                                key={platform.id}
                                onClick= {() => onSelectPlatform(platform)}
                                >
                                {platform.name}
                            </Menu.Item>))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default PlatformSelector;