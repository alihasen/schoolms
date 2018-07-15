import React from 'react';
import { connect } from 'react-redux'

const Hello = (data) => (
    <div>
        Hello
        <h3>{data.body}</h3>
    </div>
)

const mapStateToProps = state => ({
    body: state.login.data.body
})


export default connect(mapStateToProps)(Hello);