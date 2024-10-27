import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Table } from 'react-bootstrap'
import TableRows from './TableRows'

const Lists = memo(function Lists({ products, handleDelted, handleEdit, search }) {
	let sum = 1
	return (
		<>
			<Table striped bordered hover className='mt-5'>
				<thead>
					<tr>
						<th className='text-center'>#</th>
						<th>Product Name</th>
						<th className='text-center'>Price</th>
						<th className='text-center'>Category</th>
						<th className='text-center'>Quantity</th>
						<th className='text-center'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products?.filter(item=> item.productName.toLowerCase().includes(search.trim().toLowerCase())).map((item, index) => (
						<TableRows
							handleDelted={handleDelted}
							handleEdit={handleEdit}
							key={index}
							{...item}
							count={sum++}
						/>
					))}
				</tbody>
			</Table>
		</>
	)
})

Lists.propTypes = {
	products: PropTypes.array,
}

export default Lists
