import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { authContext } from '../components/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const CreateAssignment = () => {
    const { user } = useContext(authContext); 
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        marks: '',
        thumbnail: '',
        difficulty: '',
        dueDate: new Date(),
    });

    const handleChange =  (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, dueDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.marks || !formData.thumbnail || !formData.difficulty) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required!',
            });
            return;
        }

        const assignmentData = {
            ...formData,
            createdBy: {
                email: user?.email || 'Anonymous',
                name: user?.displayName || 'Anonymous',
            },
        };
    
        try {
            const response = await fetch('http://localhost:5000/assignments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assignmentData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Assignment Created Successfully!',
                    text: `Title: ${assignmentData.title}`,
                });
    
                setFormData({
                    title: '',
                    description: '',
                    marks: '',
                    thumbnail: '',
                    difficulty: '',
                    dueDate: new Date(),
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message || 'Something went wrong!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to create assignment!',
            });
        }
    };
    return (
        <div className='py-16'>
            <Helmet><title>Create Assignment</title></Helmet>
            <h2 className="text-5xl font-bold text-center my-5">Create Assignment</h2>
            <div className="max-w-xl mx-auto mt-10 p-5 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit}>


                    <div className="mb-4">
                        <label htmlFor="title" className="block text-2xl font-medium mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter assignment title"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-2xl font-medium mb-1">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter assignment description"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="marks" className="block text-xl font-medium mb-1">Marks</label>
                        <input
                            type="number"
                            id="marks"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter assignment marks"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block text-xl font-medium mb-1">Thumbnail Image URL</label>
                        <input
                            type="text"
                            id="thumbnail"
                            name="thumbnail"
                            value={formData.thumbnail}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter thumbnail URL"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="difficulty" className="block text-xl font-medium mb-1">Difficulty Level</label>
                        <select
                            id="difficulty"
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            <option value="" disabled>Select difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dueDate" className="block text-xl font-medium mb-1">Due Date</label>
                        <DatePicker
                            selected={formData.dueDate}
                            onChange={handleDateChange}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
<div className='flex w-full justify-around'>
<div className="mb-4">
                        <label htmlFor="username" className="block text-xl font-medium mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={user?.displayName || 'Anonymous'}
                            disabled
                            className="w-full px-3 py-2 border rounded-xl cursor-not-allowed focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={user?.email || 'Anonymous'}
                            disabled
                            className="w-full px-3 py-2 border cursor-not-allowed rounded-xl focus:outline-none"
                        />
                    </div>
</div>
                    <button
                        type="submit"
                        className="w-5/12 mx-auto block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Create Assignment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;
