import { Drawer } from 'antd';

const DrawerComp = (props) => {
	const { onClose, state, info } = props;
	return (
		<>
			<Drawer
				title='Car Details'
				placement='right'
				closable={true}
				onClose={onClose}
				visible={state?.visible}
				key={state?.placement}>
				Title : {info?.node?.title}
				<br />
				Key : {info?.node?.key}
			</Drawer>
		</>
	);
};

export default DrawerComp