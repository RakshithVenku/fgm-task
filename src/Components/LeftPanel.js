import { Tree } from 'antd';
import { DownOutlined, FolderOpenOutlined } from '@ant-design/icons'
const { DirectoryTree } = Tree;
const treeData = [
    {
        title: 'Car Companies',
        key: '0-0',
        icon: <FolderOpenOutlined />,
        children: [
            {
                title: 'Hyundai',
                key: '0-0-0',
                icon: <FolderOpenOutlined />,
                children: [
                    {
                        title: 'Venue',
                        key: '0-0-0-0',
                        icon: <FolderOpenOutlined />,
                    },
                    {
                        title: 'i20',
                        key: '0-0-0-1',
                        icon: <FolderOpenOutlined />,
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
                        icon: <FolderOpenOutlined />,
                    },
                    {
                        title: 'Carnival',
                        key: '0-0-1-1',
                        icon: <FolderOpenOutlined />,
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
                        icon: <FolderOpenOutlined />,
                    },
                    {
                        title: 'Kiger',
                        key: '0-0-2-1',
                        icon: <FolderOpenOutlined />,
                    },
                ],
            },
        ],
    },
];

const LeftPanel = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};

export default LeftPanel
