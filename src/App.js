import 'antd/dist/antd.css'
import React from 'react'
import { useState } from 'react'
import { Layout } from 'antd';
import HeaderComp from './Components/HeaderComp'
import LeftPanel from './Components/LeftPanel'
import MainContentArea from './Components/MainContentArea'

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [selected, setSelected] = useState({})
  return (
    <div>
     <Layout>
     <Sider width="50"></Sider>
      
      <Content style={{ margin: '10px' }}>
        <HeaderComp />
        <div className="site-layout-background" style={{ minHeight: 529}}>
          <Layout>
            <Sider
							theme='light'
							style={{  padding: '10px' ,borderRadius: '10px' }}>
							<LeftPanel  setSelected={setSelected} />
						</Sider>
            <Content style={{ padding: '10px', borderRadius: '10px' }}>
							<MainContentArea info={selected} />
						</Content>
          </Layout>
        </div>
      </Content>
   </Layout>
    </div>
  )
 }


export default App;


