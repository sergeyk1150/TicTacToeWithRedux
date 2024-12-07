import PropTypes from 'prop-types';
import { getInfoAboutGame } from '../../utils/utils';
import styles from './Information.module.css';
import { useGetState } from '../../hooks/use-get-state';

export const InformationContainer = () => {
	const state = useGetState();
	const info = getInfoAboutGame(state);

	return <div className={styles.information}>{info}</div>;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
