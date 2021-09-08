import React from 'react'
import { useAppContextProvider } from './App.context'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { LoginForm } from './components/LoginForm'
import { StyledApp, Content } from './App.style'

import 'antd/dist/antd.css'

export function App() {
	const { AppContextProvider, value } = useAppContextProvider()
	const isLoggedIn = Boolean(value.user)

	return (
		<AppContextProvider value={value}>
			<StyledApp>
				<Content>
					<Header />
					{isLoggedIn && <Dashboard />}
					{!isLoggedIn && <LoginForm />}
				</Content>
			</StyledApp>
		</AppContextProvider>
	)
}
