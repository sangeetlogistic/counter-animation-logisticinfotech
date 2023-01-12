import { IScoreCard } from "../interface";

export default function shuffleArray(array: IScoreCard[]) {
	return array
		.map((a: IScoreCard) => ({ sort: a.score, value: a }))
		.sort((a: {sort:number; value:IScoreCard}, b: {sort:number; value:IScoreCard}) => b.sort - a.sort)
		.map((a: {sort:number; value:IScoreCard}) => a.value);
}
