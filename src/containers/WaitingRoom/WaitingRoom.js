import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchSortBar from '../../components/SearchSortBar/SearchSortBar';
import PatientsTable from '../../components/WaitingPatientsTable/WaitingPatientsTable';

const patients = [
    {
        firstName: 'George',
        lastName: 'Huphaluphagus',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },
    {
        firstName: 'Sally',
        lastName: 'Schumacher',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },
    {
        firstName: 'Steve',
        lastName: 'Sterling',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },
    {
        firstName: 'Jorge',
        lastName: 'Gonzales',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },
    {
        firstName: 'Randy',
        lastName: 'Racoon',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },
    {
        firstName: 'Lola',
        lastName: 'Who',
        waitTime: '12:00',
        type: 'firstAvailable',
        department: 'Chula Vista',
        provider: 'Chan',
        date: 'Apr, 21, 2020',
        notes: 'here i am ',
    },

]

export class WaitingRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            apptType: '',
            date: '',
            notes: '',
            department:'',
            provider: '',
            date: '',
            departments: [
                 "Carlsbad", "La Jolla Ximed", "Del Mar",
            ],
            providers : [
                 "Balhru", "Switzer", "Chan"
            ],
        }
    }

    handleChange = (e, type) =>{
        console.log(" on changetype", type);
    }

    inputChange = (e, type) => {
        console.log('type input', e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleDateChange = (date) => {
        this.setState({
            date,
        })        
    }
    
    render() {
        return (
            <div>
                <h1>Waiting Room</h1>
                <SearchSortBar 
                    provider={this.state.provider} 
                    department={this.state.department} 
                    firstName={this.state.firstName} 
                    lastName={this.state.lastName} 
                    apptType={this.state.apptType} 
                    notes={this.state.notes} 
                    departments={this.state.departments} 
                    providers={this.state.providers} 
                    date={this.state.date}
                    handleChange={this.handleChange} 
                    inputChange={this.inputChange} 
                    handleDateChange={this.handleDateChange}
                />
                <PatientsTable patients={patients}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom)
