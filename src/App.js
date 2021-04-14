import React from 'react'
import { Layout } from 'antd'

const App = (props) => {
  const { Sider, Content } = Layout

  return (
    <div>
        <Layout>
             <Sider width='50'></Sider>
        </Layout>
    </div>
  )
}

export default App
