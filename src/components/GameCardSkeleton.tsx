import { Card, Skeleton, HStack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card.Root>
            {/* Image placeholder */}
            <Skeleton height="200px" />

            <Card.Body gap="2">
                {/* Title placeholder */}
                <Skeleton height="20px" width="70%" />

                {/* Platform + score row */}
                <HStack justifyContent="space-between">
                    <HStack gap="1">
                        {/* Fake platform icons */}
                        <Skeleton boxSize="4" borderRadius="full" />
                        <Skeleton boxSize="4" borderRadius="full" />
                        <Skeleton boxSize="4" borderRadius="full" />
                    </HStack>

                    {/* Fake critic score */}
                    <Skeleton height="20px" width="30px" borderRadius="md" />
                </HStack>
            </Card.Body>

        </Card.Root>
    );
};

export default GameCardSkeleton;
