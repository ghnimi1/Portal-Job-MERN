import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions/userActions';
import Alert from './Alert';

function UpdateProfileCandidat({ setEditing }) {
    const { userProfile } = useSelector(state => state.userProfile)
    const { error, success } = useSelector(state => state.updateUserProfile)
    const dispatch = useDispatch()
    const [info, setInfo] = useState(userProfile?.profile)
    const [photo, setPhoto] = useState("")
    const [skillsL, setSkills] = useState(null);

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const skills = skillsL?.toString().split(",").map((skill) => skill);
        const formdata = new FormData();
        formdata.append("file", photo);
        formdata.append("upload_preset", "upload");
        await fetch("  https://api.cloudinary.com/v1_1/dnw7or6mq/image/upload", {
            method: "post",
            body: formdata
        })
            .then(resp => resp.json())
            .then(data => {
                const url = data.url
                const newUser = {
                    profile: {
                        name: info?.name,
                        title: info?.title,
                        description: info?.description,
                        photo: url,
                        skills: skills,
                        basicInfo: {
                            age: info?.age,
                            phoneno: info?.phoneno,
                            experiance: info?.experiance,
                            location: info?.location,
                            email: info?.email
                        },
                        education: {
                            university: info?.university,
                            edescription: info?.edescription
                        },
                        projects: {
                            projectname: info?.projectname,
                            pdescription: info?.pdescription
                        },
                        certification: {
                            certiname: info?.certiname,
                            cdescription: info?.cdescription
                        }
                    }
                }
                dispatch(updateUserProfile(newUser))
            })
            .catch(err => console.log(err))
        if (success) { setEditing(false) }
    };
    return (
        <div className="col-lg-8">
            <h4 className="mb-3">Edit Profile</h4>
            <form className="needs-validation" >
                <div className="row g-3">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <div className="col-12 col-md-3 mb-2">
                                <div className="left">
                                    <img
                                        src={
                                            photo
                                                ? URL.createObjectURL(photo)
                                                : userProfile?.profile?.photo
                                        }
                                        alt=""
                                        style={{ width: "100px", height: '100px' }}
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control"
                                        id="photo"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                    />
                                    <label className="input-group-text">Upload</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-sm-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name"
                                        placeholder="Enter name" defaultValue={userProfile?.profile?.name}
                                        onChange={handleChange} />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title"
                                        placeholder="Enter Title" defaultValue={userProfile?.profile?.title}
                                        onChange={handleChange} />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Skills</label>
                                    <input type="text" className="form-control" value={skillsL}
                                        placeholder="Enter Skills"
                                        onChange={(e) => setSkills(e.target.value)} />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="description"
                                        placeholder="Enter Description" defaultValue={userProfile?.profile?.description}
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-sm-6">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="phoneno"
                                        placeholder="Phone Number" defaultValue={userProfile?.profile?.basicInfo?.phoneno}
                                        onChange={handleChange} />
                                    {error && <Alert error={error} />}
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Location</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="location"
                                            placeholder="Enter Location" defaultValue={userProfile?.profile?.basicInfo?.location}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Experiance (ans)</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="experiance"
                                            placeholder="Enter Experiance" defaultValue={userProfile?.profile?.basicInfo?.experiance}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <input type="email" className="form-control" id="email"
                                            placeholder="Enter Email" defaultValue={userProfile?.profile?.basicInfo?.email}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <p className="mb-4"><span className="text-primary font-italic me-1">Education</span>
                            </p>
                            <div className="col-12">
                                <label className="form-label">University</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="university"
                                        placeholder="Enter University" defaultValue={userProfile?.profile?.education?.university}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Description</label>
                                <div className="input-group has-validation">
                                    <textarea type="text" className="form-control" id="edescription"
                                        placeholder="Enter description" defaultValue={userProfile?.profile?.education?.edescription}
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <p className="mb-4"><span className="text-primary font-italic me-1">Projects</span>
                            </p>
                            <div className="col-12">
                                <label className="form-label">Project Name</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="projectname"
                                        placeholder="Enter Project Name" defaultValue={userProfile?.profile?.projects?.projectname}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Description</label>
                                <div className="input-group has-validation">
                                    <textarea type="text" className="form-control" id="pdescription"
                                        placeholder="Enter description" defaultValue={userProfile?.profile?.projects?.pdescription}
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <p className="mb-4"><span className="text-primary font-italic me-1">Certification</span>
                            </p>
                            <div className="col-12">
                                <label className="form-label">Certification Name</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="certiname"
                                        placeholder="Enter Certification Name" defaultValue={userProfile?.profile?.certification?.certiname}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Description</label>
                                <div className="input-group has-validation">
                                    <textarea type="text" className="form-control" id="cdescription"
                                        placeholder="Enter description" defaultValue={userProfile?.profile?.certification?.cdescription}
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <button className="w-100 btn btn-primary btn-lg mt-3"
                    onClick={handleClick}>Update</button>
            </form >
        </div >
    );
}

export default UpdateProfileCandidat