import { FileTextFilled } from '@ant-design/icons'
import { useState } from 'react'
import {Venue} from './CarComponents/Venue'
import {Creta} from './CarComponents/Creta'
import {Seltos} from './CarComponents/Seltos'
import {Carnival} from './CarComponents/Carnival'
import {Duster} from './CarComponents/Duster'
import {Kiger} from './CarComponents/Kiger'
import  DrawerComp from './DrawerComp'
import { Card, Divider } from 'antd'

//  images folder
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
				<Venue hyundaiVenue={hyundaiVenue} showDrawer={showDrawer}/>
			) : (
				''
			)}
			{title === 'Creta' ? (
				<Creta hyundaiCreta={hyundaiCreta} showDrawer={showDrawer} />
			) : (
				''
			)}
			{title === 'Seltos' ? (
				<Seltos kiaSeltos={kiaSeltos} showDrawer={showDrawer}/>
			) : (
				''
			)}
			{title === 'Carnival' ? (
				<Carnival kiaCarnival={kiaCarnival} showDrawer={showDrawer} />
			) : (
				''
			)}
            {title === 'Duster' ? (
				<Duster renaultDuster={renaultDuster} showDrawer={showDrawer} />
			) : (
				''
			)}
            {title === 'Kiger' ? (
				<Kiger renaultKiger={renaultKiger} showDrawer={showDrawer} />
			) : (
				''
			)}
            
			<br />

			<DrawerComp state={state} info={info} onClose={onClose} />
		</>
	)
}


export default MainContentArea