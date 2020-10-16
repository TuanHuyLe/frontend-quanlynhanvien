import React, { useEffect, useState } from 'react';
import Aside from '../../components/admin/Aside';
import Footer from '../../components/admin/Footer';
import MainAside from '../../components/admin/MainAside';
import Navbar from '../../components/admin/Navbar';
import Dashboard from '../view/Admin/Dashboard';

import Staff from '../view/Admin/Staff';
import AddStaff from '../view/Admin/Staff/AddStaff';
import Department from '../view/Admin/Department';
import AddDepartment from '../view/Admin/Department/AddDepartment';
import EditStaff from '../view/Admin/Staff/EditStaff';
import EditDepartment from '../view/Admin/Department/EditDepartment';

import staffApi from '../../api/staffApi'
import groupApi from '../../api/groupApi'
import positionApi from '../../api/positionApi'

import '../../assets/admin/plugins/fontawesome-free/css/all.min.css';
import '../../assets/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../assets/admin/plugins/jqvmap/jqvmap.min.css';
import '../../assets/admin/dist/css/adminlte.min.css';
import '../../assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../../assets/admin/plugins/daterangepicker/daterangepicker.css';
import '../../assets/admin/plugins/summernote/summernote-bs4.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default ({ children }) => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [position, setPosition] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await staffApi.getAll();
                setUsers(data.users);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);

    useEffect(() => {
        const getPosition = async () => {
            try {
                const { data } = await positionApi.getAll();
                setPosition(data.position);
            } catch (error) {
                console.log(error);
            }
        }
        getPosition();
    }, []);

    useEffect(() => {
        const getGroups = async () => {
            try {
                const { data } = await groupApi.getAll();
                setGroups(data.groups);
            } catch (error) {
                console.log(error);
            }
        }
        getGroups()
    }, []);

    const removeStaff = (id) => {
        console.log(id);
        const newData = users.filter(staff => staff.id !== id);
        setUsers(newData);
        staffApi.remove(id);
    }

    const onHandleAdd = (staff) => {
        setUsers([
            ...users,
            staff
        ])
        staffApi.create(staff);
        localStorage.setItem('staffs', JSON.stringify(users));
    }

    const onHandleUpdate = (updateStaff) => {
        const newStaffs = users.map(staff => (
            staff.id == updateStaff.id ? updateStaff : staff
        ));
        console.log(updateStaff);
        setUsers(newStaffs);
        staffApi.update(updateStaff.id, updateStaff)
    }

    const onHandleAddGroup = (group) => {
        setGroups([
            ...groups,
            group
        ])
        localStorage.setItem('groups', JSON.stringify(groups));
        groupApi.create(group);

    }

    const removeGroup = (group_id) => {
        const newData = groups.filter(group => group.group_id !== group_id);
        setGroups(newData);
        groupApi.remove(group_id);
    }

    const onHandleUpdateGroup = (updateGroup) => {
        const newGroup = groups.map(group => (
            group.group == updateGroup.group_id ? updateGroup : group
        ));

        setGroups(newGroup);
        groupApi.update(updateGroup.group_id, updateGroup)

    }

    return (
        <div className="admin-page">
            <Router>
                <div id="Wrapper">
                    <Navbar />
                    <div className="content-wrapper">
                        <Switch>

                            <Route exact path="/admin/">
                                <Dashboard />
                            </Route>

                            <Route path="/admin/staffs">
                                <Staff users={users} onRemove={removeStaff} />
                            </Route>

                            <Route path="/admin/departments">
                                <Department groups={groups} onRemove={removeGroup} />
                            </Route>

                            <Route path="/admin/add-staff">
                                <AddStaff groups={groups} position={position} onAdd={onHandleAdd} />
                            </Route>

                            <Route path="/admin/add-department">
                                <AddDepartment onAddGroup={onHandleAddGroup} />
                            </Route>

                            <Route path="/admin/edit-staff/:id">
                                <EditStaff users={users} groups={groups} onUpdate={onHandleUpdate} />
                            </Route>

                            <Route path="/admin/edit-department/:id">
                                <EditDepartment groups={groups} onUpdate={onHandleUpdateGroup} />
                            </Route>

                        </Switch>
                    </div>

                    <MainAside />
                    <Footer />
                    <Aside />
                </div>
            </Router>
        </div>
    )
}

