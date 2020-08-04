import React from 'react'
import cl from './ShadowMode.module.css'
import { connect } from 'react-redux';
import { toggleShadowMode } from '../../../redux/comments-reducer'

const ShadowMode = ({toggleShadowMode}) => {

    const changeShadowMode = (e) => {
        let value = e.target.checked
        toggleShadowMode(value)
    }

    return (
        <div className={cl.shadow}>
            <span>Enable the shadow mode</span>
            <input onClick={changeShadowMode} type="checkbox" name="onoffswitch" />
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        isShadowActive: state.commentsPage.isShadowActive,

    }
}
export default connect(mapStateToProps, { toggleShadowMode })(ShadowMode)



