import React, { useEffect, useState, useContext } from 'react';
import { authContext } from '../components/AuthProvider/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const MyAttemptedAssignment = () => {
    const { user } = useContext(authContext);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        if (!user) {
            return;
        }

        // fetch(`https://study-together-server-one.vercel.app/my-submissions?email=${user.email}`)
        //     .then((res) => res.json())
        //     .then((data) =>  setSubmissions(data.submissions))

        axios.get(`https://study-together-server-one.vercel.app/my-submissions?email=${user.email}`, {
            withCredentials: true,
            
        })
        .then((res) => setSubmissions(res.data.submissions) )
            
    }, [user]);

    return (
        <div>
            <Helmet><title>My Attempted Assignments</title></Helmet>
            <h1 className="text-5xl font-bold text-center my-12">My Attempted Assignments</h1>

            {submissions.length === 0 ? (
    <p className='text-center'><span class="loading loading-spinner loading-xl"></span>
</p>            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-10/12 mx-auto text-center">
                        <thead>
                        <tr className='text-2xl font-bold '>
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
                                    <td>{submission.assignmentTitle}</td>
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
