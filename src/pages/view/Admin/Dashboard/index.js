import React, { useState, useEffect } from 'react'
// import staffApi from '../../../../api/staffApi';
import groupApi from '../../../../api/groupApi';

const Dashboard = props => {
    // const [staffs, setstaffs] = useState([]);
    // useEffect(() => {
    //     const getStaffs = async () => {
    //         try {
    //             const { data } = await staffApi.getAll();
    //             setstaffs(data);
    //         } catch (error) {

    //         }
    //     }
    //     getStaffs()
    // }, []);
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
                            {/* <h3 className="h5 mb-0 font-weight-bold text-gray-800">{staffs.length}</h3> */}
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
                            <h3 className="h5 mb-0 font-weight-bold text-gray-800">{groups.length}</h3>
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
