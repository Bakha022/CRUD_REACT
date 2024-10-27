import PropTypes from 'prop-types'
import React from 'react'

const TableRows = ({ productName, price, category, quantity, count, id, handleDelted, handleEdit}) => {
	return (
		<>
			<tr>
				<td>{count}</td>
				<td>{productName}</td>
				<td className='text-center'>{price}</td>
				<td className='text-center'>{category}</td>
				<td className='text-center'>{quantity}</td>
				<td className='d-flex justify-content-between'>
					<button onClick={()=> handleEdit(id)} className='btn btn-primary'>Edit</button>
					<button onClick={()=> handleDelted(id)} className='btn btn-danger'>Delete</button>
				</td>
			</tr>
		</>
	)
}

TableRows.propTypes = {
	productName: PropTypes.string,
	price: PropTypes.string,
	category: PropTypes.string,
	quantity: PropTypes.string,
	count: PropTypes.number,
}

export default TableRows
