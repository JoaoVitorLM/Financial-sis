import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import SidebarMobal from '../MobalSidebar'


const HeaderMobal = () => {
    const [sidebar, setSidebar] = useState(false)
  
    const showSiderbar = () => setSidebar(!sidebar)
  
    return (
      <Container>
        <FaBars onClick={showSiderbar} />
        {sidebar && <SidebarMobal active={setSidebar} />}
      </Container>
    )
  }
  
  export default HeaderMobal