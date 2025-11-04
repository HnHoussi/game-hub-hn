import {Button, Menu, Portal} from "@chakra-ui/react";
import {RiArrowDownWideLine} from "react-icons/ri";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date Added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},
        {value: "-rating", label: "Average rating"},
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button size="sm" variant="outline">
                    Order by : {currentSortOrder?.label || 'Relevance'} <RiArrowDownWideLine />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map((order) =>
                            <Menu.Item
                                key={order.value}
                                value={order.value}
                                onClick={() => onSelectSortOrder(order.value)}
                            >
                                {order.label}
                            </Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;