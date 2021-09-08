import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppContextValue } from '@src/App.context'
import { User } from '@src/types'
import { Panel, SignInText, Error } from './LoginForm.style'

type LoginFormValues = Partial<User>

export function LoginForm() {
	const [error, setError] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const { logIn } = useAppContextValue()

	const onFinish = async (values: LoginFormValues) => {
		try {
			setIsLoading(true)
			await logIn(values.username!, values.password!)
			setError(false)
		} catch (err) {
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Panel>
			<SignInText>Sign in</SignInText>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Error error={error}>
					<div>Invalid username or password</div>
					<ul>
						<li>try password "ilovereact"</li>
					</ul>
				</Error>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button loading={isLoading} type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Panel>
	)
}
