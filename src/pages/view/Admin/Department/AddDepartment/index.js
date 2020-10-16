import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import groupApi from '../../../../../api/groupApi'

const AddDepartment = ({ onAddDepartment }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = (data) => {
        try {
            groupApi.create(data);
            history.push('/admin/departments');
            swal("Thêm thành công!", {
                icon: "success",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Add Departmentc</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)} >
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="" aria-describedby="nameHelp"
                            name="name" ref={register({ required: true, minLength: 2 })} />
                        <small id="nameHelp" className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 2 ký tự</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input className="form-control" type="text" placeholder="" aria-describedby="nameHelp"
                            name="description" ref={register({ required: true, minLength: 2 })} />
                        <small id="nameHelp" className="form-text text-danger">
                            {errors.description && errors.description.type === "required" && <span>Hãy nhập mô tả</span>}
                            {errors.description && errors.description.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 2 ký tự</span>}
                        </small>
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">Add</button>
                    <Link to="/admin/departments">
                        <a className="btn btn-danger text-white">Back</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

AddDepartment.propTypes = {

}

export default AddDepartment
