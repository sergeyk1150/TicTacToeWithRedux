import { store } from '../store';

export const reset = () => {
	store.dispatch({
		type: 'RESET',
		payload: {
			currentPlayer: 'X',
			isGameEnded: false,
			isDraw: false,
			field: ['', '', '', '', '', '', '', '', ''],
		},
	});
};
