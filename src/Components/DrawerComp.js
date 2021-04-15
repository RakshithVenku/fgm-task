import { Drawer } from 'antd';

const DrawerComp = (props) => {
	const { close, state, info } = props;
	return (
		<>
			<Drawer
				title='Car Details'
				placement='right'
				closable={true}
				onClose={close}
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