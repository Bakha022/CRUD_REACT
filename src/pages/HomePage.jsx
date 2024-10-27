import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { v4 } from 'uuid'
import Form from '../components/Form'
import Header from '../components/Header'
import Lists from '../components/Lists'

const HomePage = () => {
	const [products, setProducts] = useState(
		JSON.parse(localStorage.getItem('datas')) || []
	)
	const [validated, setValidated] = useState(false)
	const [search, setSearch] = useState('')
	const [categorySearch, setCategorySearch] = useState('all')
	const [sort, setSort] = useState('')
	const [selected, setSelected] = useState(null)
	const [product, setProduct] = useState({
		productName: '',
		price: '',
		category: 'dairy',
		quantity: '',
	})

	const refs = useRef(null)

	let newProducts
	const handleSubmit = e => {
		e.preventDefault()
		if (e.currentTarget.checkValidity()) {
			if (selected == null) {
				newProducts = [...products, { ...product, id: v4() }]
				setProduct({
					id: v4(),
					productName: '',
					price: '',
					category: 'dairy',
					quantity: '',
				})
			} else {
				newProducts = products.map(item =>
					item.id == selected ? product : item
				)
				setProducts(newProducts)
			}
			setSelected(null)
			setProducts(newProducts)
			setValidated(false)
			setProduct({
				id: v4(),
				productName: '',
				price: '',
				category: 'dairy',
				quantity: '',
			})

			localStorage.setItem('datas', JSON.stringify(newProducts))
		} else {
			setValidated(true)
		}
	}

	const handleChangeinput = e => {
		setProduct({ ...product, [e.target.id]: e.target.value })
	}

	const handleSearching = e => {
		setSearch(e.target.value)
	}

	const handleDelted = id => {
		newProducts = products.filter(item => item.id !== id)
		setProducts(newProducts)
	}

	const inputeRefs = () => {
		refs.current.focus()
	}
	const handleEdit = id => {
		setSelected(id)
		const editArr = products.find(item => item.id === id)
		setProduct(editArr)
		inputeRefs()
	}

	const handleCategory = e => {
		setCategorySearch(e.target.value)
	}

	const handleSort = e => {
		setSort(e.target.value)
	}

	const resultProducts = products
		.filter(item =>
			item.productName.toLowerCase().includes(search.toLowerCase().trim())
		)
		.filter(item =>
			categorySearch == 'all' ? true : item.category == categorySearch
		)

	const sorted =
		sort == 'incrace'
			? [...resultProducts].sort((a, b) => a.price - b.price)
			: sort == 'decrace'
			? [...resultProducts].sort((a, b) => b.price - a.price)
			: resultProducts

	const HeaderComponent = {
		categorySearch,
		sort,
		handleSearching,
		handleSort,
		handleCategory,
	}

	const FormComponent = {
		validated,
		product,
		selected,
		handleSubmit,
		handleChangeinput,
		handleCategory,
	}

	const ListItem = {
		products: sorted,
		search,
		handleEdit,
		handleDelted,
	}

	useEffect(() => {
		localStorage.setItem('datas', JSON.stringify(products))
	}, [products])

	return (
		<Container>
			<Header {...HeaderComponent} />
			<Row>
				<Col>
					<Form ref={refs} {...FormComponent} />
				</Col>
				<Col>
					<Lists {...ListItem} />
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
