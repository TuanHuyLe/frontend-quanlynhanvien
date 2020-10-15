import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../../firebase';
import swal from 'sweetalert';


const EditStaff = ({ staffs, departments, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const staff = staffs.find(staff => staff.id === id);
    const { register, handleSubmit, errors } = useForm();

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        if (data.image[0] == null) {
            const newData = {
                ...data,
                image: staff.image
            }
            console.log(newData);
            onUpdate(newData)
        } else {
            let file = data.image[0];
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    console.log(url);
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    const newData = {
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                    onUpdate(newData)
                })
            });
        }

        history.push('/admin/staffs');
        swal("Sửa thành công!", {
            icon: "success",
        });
    }

    useEffect(() => {
        const checked = document.getElementsByTagName('option');
        for (var i = 0; i < checked.length; i++) {
            if (checked[i].value == staff.department_id) {
                checked[i].selected = 'selected';
            }
        }
    }, [])

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Edit Staff</h6>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input className="form-control"
                            type="text" hidden placeholder=""
                            name="id"
                            defaultValue={staff.id}
                            ref={register()} />
                        <input className="form-control" type="text" placeholder="" name="username"
                            defaultValue={staff.username}
                            ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.username && errors.username.type === "required" && <span>Hãy nhập tên</span>}
                            {errors.username && errors.username.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                            {errors.username && errors.username.type === "pattern" && <span>Có khoảng cách ở đầu hoặc tên quá dài</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="" name="name"
                            defaultValue={staff.name}
                            ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.name && errors.name.type == "required" && <span>Hãy nhập tên</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input className="form-control" type="text" placeholder="" name="email"
                            defaultValue={staff.email}
                            ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.email && errors.email.type == "required" && <span>Hãy nhập tên</span>}
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Gender</label>
                        <input className="form-control" type="text" placeholder="" name="gender"
                            defaultValue={staff.gender}
                            ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,54}$/i })} />
                        <small className="form-text text-danger">
                            {errors.gender && errors.gender.type == "required" && <span>Hãy nhập giới tính</span>}
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
                                    ref={register()}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                <small id="imageHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
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

                    <button type="submit" className="btn btn-primary mr-2">Cập nhật</button>
                    <Link to="/admin/staffs">
                        <a className="btn btn-danger text-white">Trở lại</a>
                    </Link>
                </form>
            </div>
        </div >
    )
}

EditStaff.propTypes = {

}

export default EditStaff
