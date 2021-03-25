import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import './collections-overview.style.css';

const CollectionsOverview = ({ collections }) => {
    return ( 
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                }
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview);