import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../components/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then((res) => res.json())
            .then((data) => setAssignments(data));
    }, []);

    const filteredAssignments = assignments.filter((assignment) => {
        const matchesSearch = 
            assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            assignment.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDifficulty = selectedDifficulty
            ? assignment.difficulty?.toLowerCase() === selectedDifficulty.toLowerCase()
            : true;
        
        return matchesSearch && matchesDifficulty;
    });
    

    const handleDelete = (assignmentId, createdByEmail) => {
        if (!user) {
            Swal.fire('Error!', 'You need to be logged in to complete this action.', 'error');
            return;
        }

        if (user.email !== createdByEmail) {
            Swal.fire('Unauthorized!', 'You are not authorized to delete this assignment.', 'error');
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/assignments/${assignmentId}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userEmail: user.email }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.message === 'Assignment deleted successfully') {
                            setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
                            Swal.fire('Deleted!', 'The assignment has been deleted.', 'success');
                        } else {
                            Swal.fire('Error!', 'An error occurred while deleting the assignment.', 'error');
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire('Error!', 'An error occurred while deleting the assignment.', 'error');
                    });
            }
        });
    };

    const handleUpdate = (assignmentId, createdByEmail) => {
        if (!user) {
            Swal.fire('Error!', 'You need to be logged in to complete this action.', 'error');
            return;
        }

        if (user.email !== createdByEmail) {
            Swal.fire('Unauthorized!', 'You are not authorized to update this assignment.', 'error');
            return;
        }

        navigate(`/update-assignment/${assignmentId}`);
    };

    const handleViewAssignment = (assignmentId) => {
        if (!user) {
            Swal.fire('Error!', 'You need to be logged in to view the assignment.', 'error');
            return;
        }

        navigate(`/view-assignment/${assignmentId}`);
    };

    return (
        <div className='py-20'>
            <Helmet><title>Assignments</title></Helmet>
            <h1 className='text-5xl text-center my-5 font-bold'>Assignments</h1>

            <div className="w-11/12 sm:w-4/12 mx-auto justify-end flex mb-8">
                <input
                    type="text"
                    placeholder="Search by name or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered text-lg input-md mr-2 rounded-2xl w-6/12 mb-4"
                />
                <select
                    className="select text-xl select-bordered rounded-2xl w-6/12 "
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                    <option value="">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="grid w-11/12 sm:w-9/12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map((assignment) => (
                        <div key={assignment._id} className=" p-4 rounded-2xl shadow-md w-11/12 leading-7">
                            <img
                                src={assignment.thumbnail}
                                alt={assignment.title}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <div className="badge badge-lg badge-secondary badge-outline mt-4 text-lg">
                                {assignment.difficulty}
                            </div>

                            <h2 className="text-2xl font-bold mt-2">{assignment.title}</h2>
                            <p className="text-gray-700 text-2xl">
                                <span className="font-bold text-xl">Marks :</span> {assignment.marks}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold text-xl">Description :</span>{' '}
                                {assignment.description.slice(0, 100)}... <br />
                                (view assignment to read more)
                            </p>
                            <div className="mt-4 gap-2 flex-wrap flex justify-around relative">
                                <button
                                    className="btn btn-outline btn-success"
                                    onClick={() => handleDelete(assignment._id, assignment.createdBy.email)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="btn btn-outline btn-success"
                                    onClick={() => handleUpdate(assignment._id, assignment.createdBy.email)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-outline btn-success"
                                    onClick={() => handleViewAssignment(assignment._id)}
                                >
                                    View Assignment
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-2xl font-bold">No assignments found.</p>
                )}
            </div>
        </div>
    );
};

export default Assignments;
