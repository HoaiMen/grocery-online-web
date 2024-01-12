import {
    Container,
    Flex,
    Select,
    Box,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    Input,
    Textarea,
    Text, IconButton
} from "@chakra-ui/react";
import { MdCloudUpload } from 'react-icons/md';
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const AddProduct = () => {
    return (
        <DefaultLayout>
            <Container maxW="full" mt={0} centerContent overflow="hidden">
                <Flex>
                    <Box
                        bg="green.400"
                        color="white"
                        // w='900px'
                        borderStyle=''
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 6 }}
                    >
                        <Box>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 5 }}>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5} w={{ base: 'full', md: '600px' }}>
                                                <FormControl >
                                                    <Input type="text" size="md" placeholder="Name" />
                                                </FormControl>
                                                <FormControl >
                                                    <Input type="text" size="md" placeholder="Price" />
                                                </FormControl>
                                                <FormControl>
                                                    <Select size="md" placeholder='Select Category'>
                                                        <option>Fruit</option>
                                                        <option>Vegetable</option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl >
                                                    <Input type="text" size="md" placeholder="Quantity" />
                                                </FormControl>
                                                <FormControl >
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="Description"
                                                    />
                                                </FormControl>

                                                <FormControl id="name">
                                                    <Button
                                                        w='full'
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        color="white"
                                                        _hover={{ bg: 'blue' }}
                                                    >
                                                        ADD NEW PRODUCT
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                                <WrapItem >
                                    <Box bg='gray.200' rounded='lg' w={{ base: 'full', md: '400px' }}>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} m='2' border='2px' borderColor={'blackAlpha.400'} borderStyle={"dashed"}>
                                            <VStack pl={0} spacing={3} alignItems='center'>
                                                <IconButton
                                                    aria-label="cloud"
                                                    variant='unstyled'
                                                    size='lg'
                                                    px='4'
                                                    isRound={false}
                                                    _hover={{ bg: 'blackAlpha.100' }}
                                                    icon={<MdCloudUpload size="50px" color="gray" />} />
                                                <VStack alignItems='center' spacing={0}>
                                                    <Text fontSize='lg' fontWeight='bold' color='gray.500'>Drag and drop or click here</Text>
                                                    <Text fontSize={'sm'} color='gray.500'>to upload your image</Text>
                                                </VStack>
                                            </VStack>
                                        </Box>

                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </DefaultLayout>
    )
}
export default AddProduct