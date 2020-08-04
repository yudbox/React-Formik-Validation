import React from 'react';
import { connect } from 'react-redux';


export const withBoxShadow = (Component) => {

    const ShadowComponent = (props) => {
    const shadowComponentStyle = {
        boxShadow: "0px 0px 30px 2px rgba(0,25,125,0.75)",
        borderRadius: "25px"
    }
    
    if(props.isShadowActive) return <div style={shadowComponentStyle}><Component {...props} /></div>
    return <Component {...props} />
    }




let mapStateToProps = (state) => ({
    isShadowActive: state.commentsPage.isShadowActive
})

return connect(mapStateToProps)(ShadowComponent)
 
}