import React, { useState, createRef, useEffect } from "react";

import { GlobalStyle, UserList, ListWrapper } from "./AppStyle";

import initialData from "./mockData/mockData.json";
import shuffleArray from "./helpers/shuffleArray";

import Row from "./components/Row";
import AnimateRow from "./components/AnimateRow";
import { IScoreCard } from "./interface";

const App = () => {
  	const [scoreCard, setScoreCard] = useState<IScoreCard[]>(
    	shuffleArray(initialData)
  	);

  	const randomizeScore = async () => {
    	let randomIndex: number = Math.floor(Math.random() * initialData.length);
    	const d = Object.assign([], scoreCard);
    	const updatedObj: IScoreCard = d[randomIndex];

		updatedObj.score =
      		updatedObj?.score + (Math.floor(Math.random() * 1000) + 0);
    	setScoreCard(shuffleArray(d));
  	};

  	useEffect(() => {
    	let randomScore = setInterval(() => {
      		randomizeScore();
    	}, 1000);
		return ()=>{
			clearInterval(randomScore);
		}
    	// eslint-disable-next-line
  	}, []);

  return (
    	<div>
      		<GlobalStyle />
      		<ListWrapper>
				<UserList>
					<AnimateRow>
						{scoreCard?.map(
							({ userID, displayName, score, picture }: IScoreCard, index: number) => (
								<Row
									index={index}
									key={userID}
									picture={picture}
									text={displayName}
									score={score}
									ref={createRef()}
								/>
							)
						)}
					</AnimateRow>
				</UserList>
			</ListWrapper>
    	</div>
  );
};

export default App;
