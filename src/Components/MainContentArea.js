import { FolderOpenOutlined,FileTextFilled } from '@ant-design/icons'
import { useState } from 'react'
import  DrawerComp from './DrawerComp'
import { Card, Divider } from 'antd'
import Meta from 'antd/lib/card/Meta'
import venue from '../Car Images/Hyundai/hyundai-venue.jpg'
import venue2 from '../Car Images/Hyundai/hyundai-venue-2.jpg'
import creta from '../Car Images/Hyundai/hyundai-creta.jpg'
import creta2 from '../Car Images/Hyundai/hyundai-creta-2.jpg'
import seltos from '../Car Images/Kia/kia-seltos.jpg'
import seltos2 from '../Car Images/Kia/kia-seltos-2.jpg'
import carnival from '../Car Images/Kia/kia-carnival.jpg'
import carnival2 from '../Car Images/Kia/kia-carnival-2.jpg'
import duster from '../Car Images/Renault/renault-duster.jpeg'
import duster2 from '../Car Images/Renault/renault-duster-2.jpeg'
import kiger from '../Car Images/Renault/renault-kiger.jpg'
import kiger2 from '../Car Images/Renault/renault-kiger-2.jpg'

const MainContentArea = (props) => {
	const { info } = props
	const hyundaiVenue = [venue,venue2]
    const hyundaiCreta = [creta,creta2]
	const kiaSeltos = [seltos,seltos2]
    const kiaCarnival = [carnival,carnival2]
    const renaultDuster = [duster,duster2]
    const renaultKiger = [kiger,kiger2]

	const title = info?.node?.title
	const children = info?.node?.children
	const [state, setState] = useState(false)

	const showDrawer = () => {
        console.log('state', state)
		setState({
			visible: true,
		})
	}

	const onClose = () => {
        console.log('state', state)
		setState({
			visible: false,
		})
	}

	return (
		<>
			<Divider orientation='left' plain>
				{children?.length ? (
					<h2>Folders</h2>
				) : (
					<h2>Images Content</h2>
				)}
			</Divider>
			{children?.length ? (
				<div style={{ display: 'flex'}}>
					{children?.map((ele, i) => {
						return (
							<Card 
							    onClick={showDrawer}
							    bordered={false}
							    style={{ width: 130, borderRadius: '3px', margin:'5px' }}
							    hoverable='true'>
							    <FileTextFilled key={i} style={{ fontSize: '80px' }} />
							    <p style={{textAlign:'center', marginTop: '10px'}}>{ele.title}</p>
						    </Card>
						)
					})}
				</div>
			) : (
				''
			)}

			{title === 'Venue' ? (
				<div style={{ display: 'flex'}}>
					{hyundaiVenue.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px',textAlign:'center' }}
								hoverable='true'>
									<img
										key={i}
										alt='timer'
										onClick={showDrawer}
										src={ele}
										height='200'
										width='250'
										
									/>
                                    <br />
								    <br />
								<Meta title='Venue' description='Compact SUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Creta' ? (
				<div style={{ display: 'flex' }}>
					{hyundaiCreta.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px', textAlign:'center' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='250'
								/>
                                <br />
                                <br />
								<Meta title='Creta' description='Ultimate SUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Seltos' ? (
				<div style={{ display: 'flex' }}>
					{kiaSeltos.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px', textAlign:'center' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='250'
								/>
								<br />
								<br />
								<Meta title='Seltos' description='a 5 seater SUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Carnival' ? (
				<div style={{ display: 'flex' }}>
					{kiaCarnival.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px', textAlign:'center' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='250'
								/>
								<br />
								<br />
								<Meta title='Carnival' description='a 7 seater MUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
            {title === 'Duster' ? (
				<div style={{ display: 'flex' }}>
					{renaultDuster.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px', textAlign:'center' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='250'
								/>
								<br />
								<br />
								<Meta title='Duster' description='a 5 seater SUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
            {title === 'Kiger' ? (
				<div style={{ display: 'flex' }}>
					{renaultKiger.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px', margin:'10px', textAlign:'center' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='250'
								/>
								<br />
								<br />
								<Meta title='Kiger' description='a 5 seater SUV' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
            
			<br />

			<DrawerComp onClose={onClose} state={state} info={info} />
		</>
	)
}


export default MainContentArea