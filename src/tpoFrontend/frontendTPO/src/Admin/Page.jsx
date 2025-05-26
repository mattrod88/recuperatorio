
import ContenidoSideBar from './ContenidoSideBar'


function Page(props) {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <ContenidoSideBar />
    </aside>
  )
}

export default Page