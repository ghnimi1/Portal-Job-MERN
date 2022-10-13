import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecruiterProfile } from '../redux/actions/recruiterActions';
import Alert from './Alert';

function UpdateProfileRecruiter({ setEditing }) {
    const { recruiterProfile } = useSelector(state => state.recruiterProfile)
    const { error, success } = useSelector(state => state.updateRecruiterProfile)
    const dispatch = useDispatch()
    const [info, setInfo] = useState(recruiterProfile?.companyInfo)
    const [picture, setPicture] = useState("")

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", picture);
        formdata.append("upload_preset", "upload");
        await fetch("  https://api.cloudinary.com/v1_1/dnw7or6mq/image/upload", {
            method: "post",
            body: formdata
        })
            .then(resp => resp.json())
            .then(data => {
                const url = data.url
                const newUser = {
                    ...info,
                    picture: url
                }
                dispatch(updateRecruiterProfile({ companyInfo: newUser }))
            })
            .catch(err => console.log(err))
        if (success) { setEditing(false) }
    };
    return (
        <div className="col-lg-8">
            <h4 className="mb-3">Edit Profile</h4>
            <form className="needs-validation" >
                <div className="row g-3">
                    <div className="col-12 col-md-3">
                        <div className="left">
                            <img
                                src={
                                    picture
                                        ? URL.createObjectURL(picture)
                                        : recruiterProfile?.companyInfo?.picture
                                }
                                alt=""
                                style={{ width: "100px", height: '100px' }}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <input type="file" className="form-control"
                                id="picture"
                                onChange={(e) => setPicture(e.target.files[0])}
                            />
                            <label className="input-group-text">Upload</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyName"
                            placeholder="Company name" defaultValue={recruiterProfile?.companyInfo?.companyName}
                            onChange={handleChange} />
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label">Company Phone</label>
                        <input type="number" className="form-control" id="phoneCompany"
                            placeholder="Company phone" defaultValue={recruiterProfile?.companyInfo?.phoneCompany}
                            onChange={handleChange} />
                        {error && <Alert error={error} />}
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label">Company Location</label>
                        <input type="text" className="form-control" id="companyLocation"
                            placeholder="Company Location" defaultValue={recruiterProfile?.companyInfo?.companyLocation}
                            onChange={handleChange} />
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label">Company URL</label>
                        <input type="text" className="form-control" id="companyURL"
                            placeholder="Company URL" defaultValue={recruiterProfile?.companyInfo?.companyURL}
                            onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <label className="form-label">Company Description</label>
                        <div className="input-group has-validation">
                            <textarea type="text" className="form-control" id="companyDescription"
                                placeholder="Company description" defaultValue={recruiterProfile?.companyInfo?.companyDescription}
                                onChange={handleChange} />
                        </div>
                    </div>

                </div>
                <button className="w-100 btn btn-primary btn-lg mt-3"
                    onClick={handleClick} > Update</button>
            </form>
        </div >
    );
}

export default UpdateProfileRecruiter