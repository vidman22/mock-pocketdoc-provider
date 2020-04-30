import React from 'react';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default function SearchSortBar(props) {
    return (
        <form onSubmit={props.submitForm} className="filter-controls flex">
				<div>
					<label>FIRST</label>
					<input value={props.firstName} name='firstName' onChange={(e) => props.inputChange(e)} className="form-control" type="text"/>
				</div>
				<div>
					<label>LAST</label>
					<input value={props.lastName} name='lastName' onChange={(e) => props.inputChange(e)} className="form-control" type="text"/>
				</div>
				<div>
					<label>TYPE</label>
					<select onChange={(e) => props.inputChange(e)} name="apptType" className="form-control">
						<option value=""></option>
						<option value="dropIn">1ˢᵗ Available</option>
						<option value="appointment">Appointment</option>
					</select>
				</div>

				<div>
					<label>DEPARTMENT</label>
					<select className="form-control m10right" name="department" value={props.department} onChange={(e) => props.inputChange(e)}>
                        <option value=""></option>
                        {props.departments.map(opt =>{
                            return <option key={Math.random()} value={opt}> {opt}</option>
                        })}
					</select>
				</div>

				<div>
					<label>PROVIDER</label>
					<select className="form-control m10right" name="provider" value={props.provider} onChange={(e) => props.inputChange(e)}>
                        <option value=""></option>
                        {props.providers.map(opt =>{
                            return <option key={Math.random()} value={opt}> {opt}</option>
                        })}
					</select>
				</div>

				<div id="date-filter-container" className="date-filter-container">
					<label>DATE</label>
                        <DatePicker 
                            selected={props.date}
                            onChange={props.handleDateChange}
                        />
				</div>

				<div>
					<label>NOTES</label>
					<input onChange={(e) => props.inputChange(e)} name='notes' value={props.notes} className="form-control" type="text"/>
				</div>

				<div className="txt-left search-btn-container">
					<button type="submit" className="btn btn-theme">Search</button>
				</div>
			</form>
    )
}
