import { Tree } from 'antd';
import { DownOutlined, FolderOpenOutlined,CarOutlined } from '@ant-design/icons'
const { DirectoryTree } = Tree;
const treeData = [
    {
        title: 'Car Companies',
        key: '0-0',
        children: [
            {
                title: 'Hyundai',
                key: '0-0-0',
                children: [
                    {
                        title: 'Venue',
                        key: '0-0-0-0',
                        icon: <CarOutlined />,
                    },
                    {
                        title: 'Creta',
                        key: '0-0-0-1',
                        icon: <CarOutlined />,
                    },
                ],
            },
            {
                title: 'Kia',
                key: '0-0-1',
                children: [
                    {
                        title: 'Seltos',
                        key: '0-0-1-0',
                        icon: <CarOutlined />,
                    },
                    {
                        title: 'Carnival',
                        key: '0-0-1-1',
                        icon: <CarOutlined />,
                    },
                ],
            },
            {
                title: 'Renault',
                key: '0-0-2',
                children: [
                    {
                        title: 'Duster',
                        key: '0-0-2-0',
                        icon: <CarOutlined />,
                    },
                    {
                        title: 'Kiger',
                        key: '0-0-2-1',
                        icon: <CarOutlined />,
                    },
                ],
            },
        ],
    },
];

const LeftPanel = (props) => {
  const { setSelected } = props

  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info)
    setSelected(info)
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      defaultSelectedKeys={['0-0-0']}
      switcherIcon={<DownOutlined />}
      treeData={treeData}
    />
  );
};

export default LeftPanel
