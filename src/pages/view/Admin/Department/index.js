import React from 'react'
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Department = ({ groups, onRemove }) => {

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
                <h6 className="m-0 font-weight-bold text-primary">Department</h6>
            </div>
            <div className="card-body">
                <Link to="/admin/add-department">
                    <button className="btn btn-primary">Add</button>
                </Link>
                <div className="table-responsive mt-3">
                    <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map(({ id, name, description }, index) => (
                                <tr id={'row' + id} key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <th>{name}</th>
                                    <th><img src={description} alt="" width="150" /></th>
                                    <td>
                                        <Link to={`/admin/edit-department/${id}`} className="btn btn-success">Edit</Link> &nbsp;
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

Department.propTypes = {

}

export default Department
