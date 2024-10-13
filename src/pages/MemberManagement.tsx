import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Member = {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
};

const MemberManagement: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Omit<Member, 'id'>>();

  const onSubmit = (data: Omit<Member, 'id'>) => {
    const newMember: Member = {
      ...data,
      id: Date.now().toString(),
    };
    setMembers([...members, newMember]);
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Member Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Member</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                id="name"
                type="text"
                placeholder="Enter member name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="email"
                placeholder="Enter email address"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''}`}
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                {...register('phone', { required: 'Phone number is required' })}
              />
              {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="joinDate">
                Join Date
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.joinDate ? 'border-red-500' : ''}`}
                id="joinDate"
                type="date"
                {...register('joinDate', { required: 'Join date is required' })}
              />
              {errors.joinDate && <p className="text-red-500 text-xs italic">{errors.joinDate.message}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Member
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Member List</h2>
          {members.length === 0 ? (
            <p className="text-gray-600">No members added yet.</p>
          ) : (
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.id} className="bg-white shadow-md rounded p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">Email: {member.email}</p>
                  <p className="text-gray-600">Phone: {member.phone}</p>
                  <p className="text-gray-600">Joined: {member.joinDate}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberManagement;