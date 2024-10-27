import React, { memo } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Header = memo(function Header({
	categorySearch,
	sort,
	handleSort,
	handleSearching,
	handleCategory,
}) {
	return (
		<Container className='mt-5'>
			<Row className='align-items-center'>
				<Col>
					<h3>Products</h3>
				</Col>
				<Col>
					<Form.Select value={categorySearch} onChange={handleCategory}>
						<option value='all'>Category Filter</option>
						<option value='dairy'>Dairy</option>
						<option value='meats'>Meats</option>
						<option value='fruits'>Fruits</option>
						<option value='sweets'>Sweets</option>
						<option value='flours'>Flours</option>
					</Form.Select>
				</Col>
				<Col>
					<InputGroup>
						<Form.Control
							onChange={e => handleSearching(e)}
							placeholder='Serching...'
						/>
					</InputGroup>
				</Col>
				<Col>
					<Form.Select value={sort} onChange={handleSort}>
						<option value="">Sort by price</option>
						<option value='incrace'>INCRACE</option>
						<option value='decrace'>DECRACE</option>
					</Form.Select>
				</Col>
			</Row>
		</Container>
	)
})
export default Header
