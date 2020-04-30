import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PatientDirectory extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDirectory)
