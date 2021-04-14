import { PageHeader } from 'antd';

const HeaderComp = () => {
    const routes = [
        {
          path: 'index',
          breadcrumbName: 'Home',
        },
        {
          path: 'first',
          breadcrumbName: 'Car Gallery',
        }
      ]

    return (
        <div className='site-page-header-ghost-wrapper' style={{marginBottom: '10px'}}>
             <PageHeader
               ghost={false}
               className="site-page-header"
               title="Car Gallery"
               breadcrumb={{ routes }}
               subTitle="only for car lovers.."
             />
        </div>
    )
}

export default HeaderComp