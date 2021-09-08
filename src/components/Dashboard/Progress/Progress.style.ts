import styled, { keyframes } from 'styled-components'

const shakeKeyframe = keyframes`
  10%, 90% {
    transform: translate(-1px, 0) rotate(-5deg);
  }

  20%, 80% {
    transform: translate(2px, 0) rotate(5deg);
  }

  30%, 50%, 70% {
    transform: translate(-4px, 0) rotate(-5deg);
  }

  40%, 60% {
    transform: translate(4px, 0) rotate(5deg);
  }
`

export const ForbiddenImage = styled.img`
	cursor: pointer;
	width: 120px;
	height: 120px;
	transition: 0.3s;
	transform: translate(0, 0);

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		animation: ${shakeKeyframe} 0.5s both;
	}
`