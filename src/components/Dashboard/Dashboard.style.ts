import styled, { keyframes } from 'styled-components'

const scaleKeyframe = keyframes`
  50% {
    transform: scale(1.2);
  }

  100% {
      transform: scale(1);
  }
`

export const Panel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 500px;
	max-height: 80vh;
	padding: 16px;
	width: 600px;
`

export const WarningText = styled.p`
	text-align: center;
	margin-top: 24px;
	color: white;
	font-size: 32px;
`

export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const GhostImage = styled.img`
	cursor: pointer;
	width: 200px;
	height: 200px;
	animation: ${scaleKeyframe} 2s infinite;
`
