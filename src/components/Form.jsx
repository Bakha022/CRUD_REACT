import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import { Form } from 'react-bootstrap'

const FormSection = memo(
	forwardRef(function FormSection(
		{ validated, product, selected, handleChangeinput, handleSubmit },
		ref
	) {
		return (
			<>
				<Form
					onSubmit={handleSubmit}
					noValidate
					validated={validated}
					className='mt-5 alert alert-warning'
				>
					<Form.Group className='mb-3' controlId='productName'>
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							ref={ref}
							onChange={handleChangeinput}
							value={product.productName}
							required
							type='text'
							placeholder='Product Name'
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>
							Please fill!
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='price'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							onChange={handleChangeinput}
							value={product.price}
							required
							type='number'
							placeholder='Price'
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>
							Please fill!
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Select
							value={product.category}
							onChange={handleChangeinput}
							required
						>
							<option value='dairy'>Dairy</option>
							<option value='meats'>Meats</option>
							<option value='fruits'>Fruits</option>
							<option value='sweets'>Sweets</option>
							<option value='flours'>Flours</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='quantity'>
						<Form.Label>Quantity</Form.Label>
						<Form.Control
							onChange={handleChangeinput}
							value={product.quantity}
							required
							type='number'
							placeholder='Quantity'
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>
							Please fill!
						</Form.Control.Feedback>
					</Form.Group>
					<button className='btn btn-success w-100' type='submit'>
						{selected ? 'Edit' : 'Add'} Product
					</button>
				</Form>
			</>
		)
	})
)
FormSection.protoType = {
	validated: PropTypes.bool,
	product: PropTypes.object,
	handleChangeinput: PropTypes.func,
	handleSubmit: PropTypes.func,
}
export default FormSection
