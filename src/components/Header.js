import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
	return (
		<Box
			as='section'
			px='32px'
			color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px'>
			<Heading fontWeight='800' fontSize='48px' >
				Simple pricing for your business

			</Heading>
			<Text fontWeight='500' fontSize='24px' pt='16px'>
				Plan that are carefully crafted for your business
			</Text>
		</Box>
	)
}
