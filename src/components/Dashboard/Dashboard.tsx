import React from 'react'
import Reward, { RewardElement } from 'react-rewards'
import ghostSrc from '@src/assets/emoji-ghost.png'
import { Progress } from './Progress'
import { Panel, WarningText, ProgressWrapper, GhostImage } from './Dashboard.style'

export function Dashboard() {
	const [isFinished, setIsFinished] = React.useState(false)
	const rewardRef = React.useRef<RewardElement | null>(null)

	const finishProgress = React.useCallback(() => {
		rewardRef.current!.rewardMe()
		setTimeout(() => setIsFinished(true), 1000)
	}, [])

	return (
		<Panel>
			{!isFinished && (
				<Reward
					type="confetti"
					ref={ref => {
						rewardRef.current = ref
					}}
					config={{
						elementCount: 75,
						lifetime: 100,
						spread: 75,
					}}
				>
					<ProgressWrapper>
						<Progress onFinishReached={finishProgress} />
						<WarningText>Do not touch the apple!</WarningText>
					</ProgressWrapper>
				</Reward>
			)}
			{isFinished && (
				<div>
					<GhostImage src={ghostSrc} alt="Booo Boooo" />
					<WarningText>I Warned You!</WarningText>
				</div>
			)}
		</Panel>
	)
}
