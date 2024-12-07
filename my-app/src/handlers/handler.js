import { getIsWinner } from '../utils/utils';
import { checkField } from '../utils/utils';
import { WIN_PATTERNS } from '../constants/win-patterns';
import { store } from '../store';

export const handler = (index) => {
	const { currentPlayer, isGameEnded, field } = store.getState();
	if (!isGameEnded) {
		field[index] = currentPlayer;
	}
	const isWinner = getIsWinner(WIN_PATTERNS, field, currentPlayer);

	store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: isWinner });

	if (checkField(field) === true && isWinner === false) {
		store.dispatch({ type: 'SET_IS_DRAW', payload: true });
	}
	if (checkField(field) === false && isWinner === false) {
		currentPlayer === 'X'
			? store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: '0' })
			: store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' });
	}
};
