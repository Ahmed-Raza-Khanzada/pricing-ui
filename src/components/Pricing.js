import React from 'react'
import { Box, Icon, Stack, HStack, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { CheckIcon } from '../icons/Icons'
export const ListItem = (props) => {
	const { children, ...rest } = props;
	return (
		<HStack as='li' spacing='20px' {...rest} align='flex-start'>
			<Icon as={CheckIcon} w='22px' h='22px' />
			<Text>{children}</Text>
		</HStack>
	);
};
export default function Pricing() {
	return (
		 <Box mx='6' >
		<Box
			maxW='994px'
			margin='auto'
			mt='-160px'
			borderRadius='12px'
			overflow='hidden'
			boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
			textAlign='center'
		>
			<Flex direction={['column', 'column', 'row']}>
				<Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
            <Text fontSize='xl' fontWeight='extrabold'>
              Premium PRO
            </Text>
            <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4'>
              $329
            </Heading>
            <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button
              colorScheme='purple'
              size='lg'
              w={['auto', '282px', '282px']}
              mt='6'
            >
              Get Started
            </Button>
          </Box>

				<Box p={['16px', '32px', '60px']} fontSize='18px' bg='white'>
					<Text textAlign='left'>
						Access these features when you get this pricing package for your
						business.
					</Text>
					<Stack as='ul' spacing='20px' pt='24px'>
						<ListItem>International calling and messaging API</ListItem>
						<ListItem>Additional phone numbers</ListItem>
						<ListItem>Automated messages via Zapier</ListItem>
						<ListItem>24/7 support and consulting</ListItem>
					</Stack>
				</Box>


			</Flex>
		</Box>
</Box>
	)
}
