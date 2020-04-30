import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faPen } from '@fortawesome/free-solid-svg-icons'

export default function PatientsTable(props) {
    const filteredPatients = props.patients;
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <th>FIRST</th>
                    <th>LAST</th>
                    <th>WAIT TIME</th>
                    <th>TYPE</th>
                    <th>DEPARTMENT</th>
                    <th>PROVIDER</th>
                    <th>DATE</th>
                    <th>NOTES</th>

                </tr>
                {filteredPatients.length ? filteredPatients.map(patient => {
                    return (
                        <tr className="" key={Math.random().toString()}>
                            <td>
                                <button>See Patient</button>
                            </td>
                            <td>
                                <button>Cancel</button>
                            </td>
                            <td>
                                {patient.firstName}
                            </td>
                            <td>
                                {patient.lastName}
                            </td>
                            <td>
                                {patient.waitTime}
                            </td>
                            <td>
                                {patient.type}
                            </td>
                            <td>
                                {patient.department}
                            </td>
                            <td>
                                {patient.provider}
                            </td>
                            <td>
                                {patient.date}
                            </td>
                            <td>
                                {patient.notes}
                                <FontAwesomeIcon icon={faPen} />
                            </td>

                        </tr>
                    )
                }): null}
            </tbody>
        </table>
    )
}
