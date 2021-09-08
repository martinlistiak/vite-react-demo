import React from 'react'
import { Progress as AntProgress } from 'antd'
import appleSrc from '@src/assets/apple-emoji.png'
import { ForbiddenImage } from './Progress.style'

interface Props {
	onFinishReached: () => void
}

export function Progress({ onFinishReached }: Props) {
	const [progress, setProgress] = React.useState(0)
	const progressRef = React.useRef(progress)

	React.useEffect(() => {
		const progressTimer = setInterval(() => {
			const percent = progressRef.current
			if (percent >= 100) {
				onFinishReached()
				clearInterval(progressTimer)
			}
			if (percent <= 0 || percent >= 100) {
				return
			}

			progressRef.current -= 2
			setProgress(percent - 2)
		}, 200)

		return () => {
			clearInterval(progressTimer)
		}
	}, [])

	return (
		<AntProgress
			percent={progress}
			type="circle"
			width={200}
			format={() => (
				<ForbiddenImage
					onClick={() => {
						setProgress(progress + 10)
						progressRef.current = progress + 10
					}}
					src={appleSrc}
					alt="DO NOT TOUCH THIS"
				/>
			)}
		/>
	)
}
