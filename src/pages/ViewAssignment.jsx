import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../components/AuthProvider/AuthProvider'; 

const ViewAssignment = () => {
    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [googleDocLink, setGoogleDocLink] = useState('');
    const [note, setNote] = useState('');
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/assignments/${id}`)
            .then(res => res.json())
            .then(data => setAssignment(data));
    }, [id]);

    const handleSubmitAssignment = () => {
        if (!googleDocLink || !note) {
            Swal.fire('Error!', 'Please fill in both fields.', 'error');
            return;
        }

        if (!user) {
            Swal.fire('Error!', 'You must be logged in to submit the assignment.', 'error');
            return;
        }

        const submissionData = {
            googleDocLink,
            note,
            status: 'pending',
            userEmail: user.email,
            userName: user.displayName,
        };

        fetch(`http://localhost:5000/submit-assignment/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire('Success!', 'Your assignment has been submitted.', 'success');
                    setShowModal(false);
                } else {
                    Swal.fire('Error!', 'Failed to submit the assignment.', 'error');
                }
            });
    };

    return (
        <>
            <h1 className='text-5xl font-bold text-center my-12'>View Assignment</h1>
            <div className="bg-border mb-32 p-2 sm:p-5 border-2 w-11/12 sm:w-8/12 text-center mx-auto rounded-3xl backdrop-blur-md">
                <Helmet><title>View Assignment</title></Helmet>
                {assignment ? (
                    <div className="card lg:card-side p-4 bg-base-100 shadow-xl gap-10">
                        <div className="sm:w-5/12">
                            <img
                                className="w-full mx-auto rounded-3xl"
                                src={assignment.thumbnail}
                                alt="Assignment"
                            />
                        </div>
                        <div className="card my-auto text-start gap-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-start">{assignment.title}</h2>
                            <div className="badge badge-accent p-2 sm:mt-4 ">{assignment.difficulty}</div>
                            <p className="text-gray-800 text-md sm:text-lg">{assignment.description}</p>

                            <p className="text-md sm:text-xl font-bold text-gray-500">
                                <span className="font-bold text-md text-black sm:text-xl">Marks:</span> {assignment.marks}
                            </p>
                            <p className="text-md sm:text-xl font-bold text-gray-500">
                                <span className="font-bold text-md sm:text-xl text-black">Due Date:</span> {assignment.dueDate}
                            </p>

                            <div className="card-actions justify-start">
                                <div className="flex gap-5">
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="text-white btn btn-primary text-lg sm:text-2xl rounded-full flex"
                                    >
                                        Take Assignment
                                    </button>
                                    <button
                                        onClick={() => navigate('/assignments')}
                                        className="text-white btn btn-secondary text-lg sm:text-2xl rounded-full flex"
                                    >
                                        Back to All Assignments
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='text-center'><span class="loading loading-spinner loading-md"></span>
</p>
                )}

                {showModal && (
                    <div className="modal modal-open rounded-2xl">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl">Submit Your Assignment</h3>
                            <div className="mt-4">
                                <label className="block font-medium">Google Docs Link:</label>
                                <input
                                    type="url"
                                    value={googleDocLink}
                                    onChange={(e) => setGoogleDocLink(e.target.value)}
                                    className="input input-bordered w-full mt-2"
                                    placeholder="Enter Google Docs Link"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block font-medium">Quick Note:</label>
                                <textarea
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="textarea textarea-bordered w-full mt-2"
                                    placeholder="Enter a quick note about your submission"
                                />
                            </div>
                            <div className="mt-4 flex gap-4 justify-center">
                                <button
                                    onClick={handleSubmitAssignment}
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="btn btn-primary"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ViewAssignment;
