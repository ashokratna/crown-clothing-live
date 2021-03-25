import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectDirectorySelctions } from "../../redux/directory/directory.selector";
import MenuItem from '../menu-item/menuitem.component';
import './directory.style.css';

const Directory = ({sections}) => (
  <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => {
        return(<MenuItem key={id}  {...otherSectionProps} />)
      })}
  </div> 
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelctions
})
 
export default connect(mapStateToProps)(Directory);