import React from 'react'
import { User } from '@src/types'
import { Auth } from '@src/api'

interface AppContextType {
	user: User | null
	logIn: (username: string, password: string) => Promise<void>
	logOut: () => void
}

const AppContext = React.createContext<AppContextType>({
	user: null,
	logIn: async () => {},
	logOut: () => {},
})

export const useAppContextProvider = () => {
	const [user, setUser] = React.useState<User | null>(null)

	const logIn = React.useCallback(async (username: string, password: string) => {
		const user = await Auth.logIn(username, password)

		setUser(user)
	}, [])

	const logOut = React.useCallback(async () => {
		setUser(null)
	}, [])

	return {
		AppContextProvider: AppContext.Provider,
		value: {
			user,
			logIn,
			logOut,
		},
	}
}

export const useAppContextValue = () => {
	const context = React.useContext(AppContext)

	return context
}
