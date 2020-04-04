import React from 'react'
import {Image,Header,Icon } from 'semantic-ui-react'
import mainlogo from './logoRakord600.jpg'

const Mainheader = ()=>(

<div className='mainheader'>
    <div className='dealerLogo'>
      <Image src={mainlogo} size='small'/>
    </div>
    <div className='maintitle'>
      <Header as='h2' icon>
        <Icon name='recycle' />
          vous propose un prix d'achat
        <Header.Subheader>
          en 48 heures
        </Header.Subheader>
      </Header>
    </div>
</div>
)
  


export default Mainheader