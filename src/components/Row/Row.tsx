import React, { forwardRef, useEffect, useState } from "react";

import {
	Badge,
	ScoreSpan,
	TextLabel,
	UserImg,
	UserImgBlock,
	UserName,
	UserPoints,
	UserRow,
} from "./RowStyle";

interface IProps {
	text: string;
	picture: string;
	score: number;
	index: number;
}
const Row = forwardRef(({ text, picture, score, index }: IProps, ref: any) => {
	const [count, setCount] = useState("0");

	useEffect(() => {
		let start = score - 20;
		const end = score;
		if (start === end) return;
		let timer = setInterval(() => {
			start += 1;
			setCount(String(start));
			if (start === end) clearInterval(timer);
		}, 100);
		return () => {
			clearInterval(timer);
		};
	}, [score]);

	const getBadgeColorByIndex = (index: number) => {
		if (index === 0) {
			return "e-badge-warning";
		} else if (index === 1) {
			return "e-badge-another-warning";
		} else if (index === 2) {
			return "e-badge-error";
		}
		return "e-badge-sucess";
	};

	return (
		<UserRow ref={ref}>
			<UserImgBlock>
				<UserImg
					style={{
						backgroundImage: `url('images/${picture}')`,
					}}
				/>
				<Badge className={getBadgeColorByIndex(index)}>
					{index + 1}
				</Badge>
			</UserImgBlock>
			<UserName>{text}</UserName>
			<UserPoints>
				<ScoreSpan>{count}</ScoreSpan>
				<TextLabel>points</TextLabel>
			</UserPoints>
		</UserRow>
	);
});

export default Row;
