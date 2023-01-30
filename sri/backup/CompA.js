import React from 'react'
import CompB from './CompB'
class CompA extends React.Component {

message='good morning'
name='srinivasulu'
emp={ id:'101',salary:'35000',company:'infosis'}
    render() {
        return <>
            <h2>Component A</h2>
            <CompB one={'gm'} two={'gn'} name={this.name}
                
            />
            
        </>
    }
}
export default CompA;