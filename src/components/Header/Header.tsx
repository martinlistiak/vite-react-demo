import React from 'react'
import { Dropdown, Menu } from 'antd'
import { useAppContextValue } from '@src/App.context'
import { StyledHeader, Title, LogInIndicator } from './Header.style'

export function Header() {
	const { user, logOut } = useAppContextValue()

	return (
		<StyledHeader>
			<Title>Vite-React app 🔥</Title>
			{user && (
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item onClick={logOut}>Log out 🌙</Menu.Item>
						</Menu>
					}
				>
					<LogInIndicator>{user.username}</LogInIndicator>
				</Dropdown>
			)}
		</StyledHeader>
	)
}
