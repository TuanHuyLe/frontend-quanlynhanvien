import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import groupApi from '../../../../../api/groupApi'

const EditDepartment = ({ groups, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const group = groups.find(group => group.id == id);
    const { register, handleSubmit, watch, errors } = useForm();

    const onHandleSubmit = (data) => {
        try {
            let data1 = {
                "id": id,
                "name": data.name,
                "description": data.description
            }
            groupApi.update(data1);
            history.push('/admin/departments');
            swal("Sửa thành công!", {
                icon: "success",
            });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Edit Departmentc</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="" name="name" defaultValue={group.name} ref={register({ required: true, minLength: 2 })} aria-describedby="nameHelp" />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 2 ký tự</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input className="form-control" type="text" placeholder="" name="description" defaultValue={group.name} ref={register({ required: true, minLength: 2 })} aria-describedby="nameHelp" />
                        <small id="imageHelp" className="form-text text-danger">
                            {errors.description && errors.description.type === "required" && <span>Hãy nhập mô tả</span>}
                            {errors.description && errors.description.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 2 ký tự</span>}
                        </small>
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">Update</button>
                    <Link to="/admin/departments">
                        <a className="btn btn-danger text-white">Back</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

EditDepartment.propTypes = {

}

export default EditDepartment
