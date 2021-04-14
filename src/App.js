import 'antd/dist/antd.css'
import React from 'react'
import { Layout , Menu} from 'antd';
import HeaderComp from './Components/HeaderComp'
import LeftPanel from './Components/LeftPanel'

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <div>
     <Layout>
     <Sider width="50"></Sider>
      
      <Content style={{ margin: '10px' }}>
        <HeaderComp />
        <div className="site-layout-background" style={{ minHeight: 563 }}>
            <Sider
							theme='light'
							style={{  padding: '10px' ,borderRadius: '10px' }}>
							<LeftPanel />
						</Sider>
        </div>
      </Content>
   </Layout>
    </div>
  )
 }


export default App;


