import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import USER from '../utils/index'
import PropTypes from 'prop-types';

const LoginPage = ({ setIsLogin }) => {
	const [userName, SetUserName] = useState('')
	const [passsword, SetPassword] = useState('')
	const [validated, setValidated] = useState(false)
	const navigate = useNavigate()

	const handleSubmitLogin = e => {
		e.preventDefault()
		if (e.currentTarget.checkValidity()) {
			if (
				userName.toLowerCase().trim() == USER.userName.toLowerCase() &&
				passsword.trim() == USER.password
			) {
				setValidated(false)
				toast.success('Welcome CRM!')
				setIsLogin(1)
				navigate('/')
				localStorage.setItem('islogin', 1)
			} else {
				toast.error('Wrong username or password!')
				SetPassword('')
				SetUserName('')
			}
		}
		setValidated(true)
	}
	return (
		<>
			<Form
				noValidate
				validated={validated}
				onSubmit={handleSubmitLogin}
				className='w-25 mx-auto login-section'
			>
				<Form.Group className='mb-3' controlId='email'>
					<Form.Control
						value={userName}
						required
						onChange={e => SetUserName(e.target.value)}
						type='text'
						placeholder='Username'
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3' controlId='password'>
					<Form.Control
						value={passsword}
						onChange={e => SetPassword(e.target.value)}
						type='password'
						required
						placeholder='Password'
					/>

					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>
				<button className='btn btn-success w-100' type='submit'>
					Send
				</button>
			</Form>
		</>
	)
}



LoginPage.propTypes = {
  setIsLogin: PropTypes.func
};


export default LoginPage
