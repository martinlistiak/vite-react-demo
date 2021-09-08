import styled from 'styled-components'
import { Button } from 'antd'

export const StyledHeader = styled.div`
	display: flex;
	padding: 0 16px;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 0;
	width: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	height: 50px;
`

export const Title = styled.div`
	font-size: 24px;
	color: ${({ theme }) => theme.colors.panel};
`

export const LogInIndicator = styled.div`
	color: ${({ theme }) => theme.colors.panel};
	cursor: pointer;
	padding: 8px 12px;

	&:hover {
		background: ${({ theme }) => theme.colors.secondary};
	}
`
