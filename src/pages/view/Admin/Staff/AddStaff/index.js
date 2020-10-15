import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from '../../../../../firebase';
import swal from 'sweetalert';

const AddStaff = ({ departments, onAdd }) => {
    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();
    console.log(departments);
    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];

        let storageRef = firebase.storage().ref(`images/${file.name}`);

        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                }
                const today = new Date();
                const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                newData.date = date + " " + time
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
        history.push('/admin/staffs');
        swal("Thêm thành công!", {
            icon: "success",
        });
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
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="" name="name" ref={register({ required: true, minLength: 6, pattern: /^\S{1}.{0,54}$/i })} />
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

                    <div className="form-group">
                        <label htmlFor="">Gender</label>
                        <input className="form-control" type="text" placeholder="" name="gender" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.gender && errors.gender.type === "required" && <span>Hãy nhập giới tính</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productPrice">Image</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register({ required: true })}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                <small id="imageHelp" className="form-text text-danger">
                                    {errors.image && errors.image.type == "required" && <span>Ảnh không được để trống</span>}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Department</label>
                        <select className="form-control" name="department_id" ref={register()}>
                            {departments.map(({ id, name }, index) => (
                                <option id={'row-' + id} key={index} value={id}>{name}</option>
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
