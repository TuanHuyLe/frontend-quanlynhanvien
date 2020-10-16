import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import staffApi from '../../../../../api/staffApi';

const AddStaff = ({ position, groups, onAdd }) => {
    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();
    const onHandleSubmit = (data) => {
        try {
            staffApi.create(data);
            history.push('/admin/staffs');
            swal("Thêm thành công!", {
                icon: "success",
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Add Staff</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input className="form-control" type="text" placeholder="" name="username" ref={register({ required: true, minLength: 6, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.username && errors.username.type === "required" && <span>Hãy nhập username</span>}
                            {errors.username && errors.username.type === "minLength" && <span>Username phải lớn hơn hoặc bằng 6 ký tự</span>}
                            {errors.username && errors.username.type === "pattern" && <span>Có khoảng cách ở đầu hoặc username quá dài</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input className="form-control" type="password" placeholder="" name="password" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.password && errors.password.type === "required" && <span>Hãy nhập password</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="" name="fullName" ref={register({ required: true, minLength: 6, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.name && errors.name.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.username && errors.username.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 6 ký tự</span>}
                            {errors.username && errors.username.type === "pattern" && <span>Có khoảng cách ở đầu hoặc tên quá dài</span>}
                        </small>
                    </div>



                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input className="form-control" type="text" placeholder="" name="email" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.email && errors.email.type === "required" && <span>Hãy nhập email</span>}
                        </small>
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" checked={true} value={true} />
                            <label htmlFor="male">Male</label><br />
                            <input type="radio" id="female" name="gender" value={false} />
                            <label htmlFor="female">Female</label><br />
                        </div>
                    </div> */}


                    <div className="form-group">
                        <label htmlFor="">Department</label>
                        <select className="form-control" name="gender" ref={register()}>
                            <option value={true}>Nam</option>
                            <option value={false}>Nu</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Department</label>
                        <select className="form-control" name="groupName" ref={register()}>
                            {groups.map(({ id, name }, index) => (
                                <option id={'row-' + id} key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Position</label>
                        <select className="form-control" name="positionName" ref={register()}>
                            {position.map(({ id, name }, index) => (
                                <option id={'row-' + id} key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <button type="submit" className="btn btn-primary mr-2">Add</button>
                        <Link to="/admin/staffs">
                            <a className="btn btn-danger text-white">Back</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    )
}

AddStaff.propTypes = {

}

export default AddStaff
