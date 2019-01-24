export function createDefaultModalStyle() {
	return {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(137, 137, 137, 0.75)',
			overflow: 'scroll'
		},
		content: {
			position: 'absolute',
			top: '0px',
			left: '40px',
			right: '40px',
			overflow: 'auto',
			WebkitOverflowScrolling: 'touch',
			outline: 'none',
		}
	};
}