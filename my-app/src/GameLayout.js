import PropTypes from 'prop-types';
import { FieldContainer } from './components/Field/Field.js';
import { InformationContainer } from './components/Information/Information.js';
import { reset } from './handlers/reset.js';

import styles from './Game.module.css';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<InformationContainer />
			<FieldContainer />
			<button className={styles.reset} onClick={reset}>
				Начать заного
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
