import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { authContext } from '../components/AuthProvider/AuthProvider';
import axios from 'axios';

const PendingAssignment = () => {
  const { user } = useContext(authContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true);

    if (!user) {
      setIsLoading(false); 
      return;
    }

    axios.get(`http://localhost:5000/pending-assignments?email=${user.email}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);

        if (res.data.success) {
          setPendingAssignments(res.data.submissions);
        } else {
          Swal.fire('Error!', 'Failed to fetch pending assignments.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error fetching pending assignments:', error);
        Swal.fire('Error!', 'Failed to fetch pending assignments.', 'error');
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [user]); 

  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  const openModal = (assignment) => {
    if (assignment.userEmail === user.email) {
      Swal.fire("Error!", "You can't grade your own assignment.", "error");
      return;
    }

    setSelectedAssignment(assignment);
    setMarks(assignment.obtainedMarks || ''); 
    setFeedback('');
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const submitMarks = () => {
    if (!marks || !feedback) {
      Swal.fire('Error!', 'Please fill in both marks and feedback.', 'error');
      return;
    }

    axios.put(`http://localhost:5000/give-marks/${selectedAssignment._id}`, {
      marks,            
      feedback,         
      examinerEmail: user.email,  
    })
      .then((res) => {
        if (res.data.success) {
          Swal.fire('Success!', 'Marks and feedback submitted successfully.', 'success');
          setModalIsOpen(false);
          setPendingAssignments((prevState) =>
            prevState.filter((assignment) => assignment._id !== selectedAssignment._id)
          );
        } else {
          Swal.fire('Error!', 'Failed to submit marks and feedback.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error submitting marks:', error);
        Swal.fire('Error!', 'Failed to submit marks and feedback.', 'error');
      });
  };

  const formatUrl = (url) => {
    if (!url) return '';
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `http://${url}`;
    }
    return url;
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-12">Pending Assignments</h1>

      {pendingAssignments.length === 0 ? (
        <p className="text-center">
          <span className="loading loading-spinner loading-md"></span>
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-10/12 mx-auto text-center">
            <thead>
              <tr className='text-2xl font-bold '>
                <th>Assignment Title</th>
                <th>Original Marks</th>
                <th>Obtained Marks</th>
                <th>Examinee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingAssignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td>{assignment.assignmentTitle}</td>
                  <td>{assignment.marks}</td>
                  <td>{assignment.obtainedMarks || 'N/A'}</td>
                  <td>{assignment.userName}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => openModal(assignment)}
                    >
                      Give Marks
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedAssignment && modalIsOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-bold mb-4">Grade Assignment</h2>
            <p>
              <a
                href={formatUrl(selectedAssignment?.googleDocLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Google Doc
              </a>
            </p>
            <textarea
              className="textarea textarea-bordered w-full mt-4"
              placeholder="Enter feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-full mt-4"
              placeholder="Enter obtained marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn btn-primary" onClick={submitMarks}>
                Submit
              </button>
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignment;
