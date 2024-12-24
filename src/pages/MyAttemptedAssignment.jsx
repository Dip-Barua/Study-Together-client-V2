import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../components/AuthProvider/AuthProvider';

const MyAttemptedAssignment = () => {
    const { user } = useContext(authContext);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        if (!user) {
            Swal.fire('Error!', 'Please log in to view your assignments.', 'error');
            return;
        }

        fetch(`http://localhost:5000/my-submissions?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched submissions:', data); 
                if (data.success) {
                    setSubmissions(data.submissions); 
                } else {
                    Swal.fire('Error!', 'No submissions found.', 'error');
                }
            })
            .catch((error) => {
                console.error('Error fetching submissions:', error);
                Swal.fire('Error!', 'Failed to fetch your submissions.', 'error');
            });
    }, [user]);

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-12">My Attempted Assignments</h1>

            {submissions.length === 0 ? (
                <p>No assignments found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Assignment Title</th>
                                <th>Status</th>
                                <th>Marks</th>
                                <th>Obtained Marks</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((submission) => (
                                <tr key={submission._id}>
                                    <td>{submission.assignmentId}</td>
                                    <td>{submission.status}</td>
                                    <td>{submission.marks || "Not available"}</td>
                                    <td>{submission.obtainedMarks || "Not available"}</td>
                                    <td>{submission.feedback || "No feedback"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyAttemptedAssignment;
