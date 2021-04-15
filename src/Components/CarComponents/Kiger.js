import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

export const Kiger = (props) => {
    const {renaultKiger, showDrawer} = props
    return (
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
    )
}