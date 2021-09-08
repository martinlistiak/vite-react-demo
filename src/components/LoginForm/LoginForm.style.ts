import styled, { css } from 'styled-components'

export const Panel = styled.div`
	padding: 12px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 350px;
	max-height: 80vh;
	padding: 16px;
	width: 400px;
	border-radius: 16px;
	background: ${({ theme }) => theme.colors.panel};
`

export const SignInText = styled.h1`
	font-size: 36px;
`

export const Error = styled.div<{ error: boolean }>`
	opacity: 0;

	${({ error }) =>
		error &&
		css`
			opacity: 1;
			margin-bottom: 24px;
		`}
	padding: 12px 24px;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.panel};
	background: ${({ theme }) => theme.colors.error};
	transition: 0.3s;

	& > * {
		margin: 0;
	}
`
