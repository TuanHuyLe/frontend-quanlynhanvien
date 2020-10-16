import React from 'react'
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Staff = ({ users, onRemove }) => {
    function removeElement(id) {
        swal({
            title: "Chắc chắn xóa?",
            text: "Khi xóa, sẽ không lấy lại được dữ liệu!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    onRemove(id);
                    swal("Đã xóa!", {
                        icon: "success",
                    });
                } else {
                    swal("Xóa không thành công!");
                }
            });

    }
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Staff</h6>
            </div>
            <div className="card-body">
                <Link to="/admin/add-staff">
                    <button className="btn btn-primary">Add</button>
                </Link>

                <div className="table-responsive mt-3">
                    <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Full name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Department</th>
                                <th scope="col">Position</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, username, fullName, gender, email, groupName, positionName }, index) => (
                                <tr id={'row-' + id} key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <th>{username}</th>
                                    <th>{fullName}</th>
                                    <th>{gender ? "Nam" : "Nữ"}</th>
                                    <th>{email}</th>
                                    <th>{groupName}</th>
                                    <th>{positionName}</th>
                                    <td>
                                        <Link to={`/admin/edit-staff/${id}`} className="btn btn-success">Edit</Link> &nbsp;
                                        <button onClick={() => removeElement(id)} type=" button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

Staff.propTypes = {

}

export default Staff
