import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
	const [islogin, setIsLogin] = useState(localStorage.getItem('islogin'))

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/login'
						element={<LoginPage setIsLogin={setIsLogin} />}
					/>

					<Route
						index
						element={islogin ? <HomePage /> : <Navigate to={'/login'} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
