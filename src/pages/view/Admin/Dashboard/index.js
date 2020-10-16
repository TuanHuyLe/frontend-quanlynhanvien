import React, { useState, useEffect } from 'react'
import staffApi from '../../../../api/staffApi';
import groupApi from '../../../../api/groupApi';

const Dashboard = props => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await staffApi.getAll();
                setUsers(data);
            } catch (error) {

            }
        }
        getUsers()
    }, []);

    const [groups, setgroups] = useState([]);
    useEffect(() => {
        const getGroups = async () => {
            try {
                const { data } = await groupApi.getAll();
                setgroups(data);
            } catch (error) {

            }
        }
        getGroups()
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <p>Staffs</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <p>Departments</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


Dashboard.propTypes = {

}

export default Dashboard
