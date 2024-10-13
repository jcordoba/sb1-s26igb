import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type SabbathSchoolClass = {
  className: string;
  teacherName: string;
  students: string[];
};

const SabbathSchool: React.FC = () => {
  const [classes, setClasses] = useState<SabbathSchoolClass[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SabbathSchoolClass>();

  const onSubmit = (data: SabbathSchoolClass) => {
    setClasses([...classes, { ...data, students: data.students[0].split(',').map(s => s.trim()) }]);
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sabbath School Registration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Class</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">
                Class Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.className ? 'border-red-500' : ''}`}
                id="className"
                type="text"
                placeholder="Enter class name"
                {...register('className', { required: 'Class name is required' })}
              />
              {errors.className && <p className="text-red-500 text-xs italic">{errors.className.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherName">
                Teacher Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.teacherName ? 'border-red-500' : ''}`}
                id="teacherName"
                type="text"
                placeholder="Enter teacher name"
                {...register('teacherName', { required: 'Teacher name is required' })}
              />
              {errors.teacherName && <p className="text-red-500 text-xs italic">{errors.teacherName.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="students">
                Students (comma-separated)
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.students ? 'border-red-500' : ''}`}
                id="students"
                placeholder="Enter student names, separated by commas"
                {...register('students.0', { required: 'At least one student is required' })}
              />
              {errors.students && <p className="text-red-500 text-xs italic">{errors.students.message}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Class
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Registered Classes</h2>
          {classes.length === 0 ? (
            <p className="text-gray-600">No classes registered yet.</p>
          ) : (
            <div className="space-y-4">
              {classes.map((cls, index) => (
                <div key={index} className="bg-white shadow-md rounded p-4">
                  <h3 className="text-xl font-semibold">{cls.className}</h3>
                  <p className="text-gray-600">Teacher: {cls.teacherName}</p>
                  <p className="text-gray-600">Students: {cls.students.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SabbathSchool;