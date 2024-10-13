import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

type MissionaryActivityData = {
  newConverts: number;
  teacherVisits: number;
  discipleshipStudies: number;
  companionshipActivities: number;
  projects: number;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MissionaryActivity: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MissionaryActivityData>();
  const [chartData, setChartData] = useState<MissionaryActivityData | null>(null);

  const onSubmit = (data: MissionaryActivityData) => {
    console.log(data);
    setChartData(data);
    // TODO: Implement submission logic
  };

  const renderChart = () => {
    if (!chartData) return null;

    const data = Object.entries(chartData).map(([name, value]) => ({ name, value }));

    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Missionary Activity Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Missionary Activity Tracking</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newConverts">
            New Converts
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.newConverts ? 'border-red-500' : ''}`}
            id="newConverts"
            type="number"
            placeholder="Number of new converts"
            {...register('newConverts', { required: 'This field is required', min: 0 })}
          />
          {errors.newConverts && <p className="text-red-500 text-xs italic">{errors.newConverts.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherVisits">
            Teacher Visits
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.teacherVisits ? 'border-red-500' : ''}`}
            id="teacherVisits"
            type="number"
            placeholder="Number of teacher visits"
            {...register('teacherVisits', { required: 'This field is required', min: 0 })}
          />
          {errors.teacherVisits && <p className="text-red-500 text-xs italic">{errors.teacherVisits.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discipleshipStudies">
            Discipleship Studies
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.discipleshipStudies ? 'border-red-500' : ''}`}
            id="discipleshipStudies"
            type="number"
            placeholder="Number of discipleship studies"
            {...register('discipleshipStudies', { required: 'This field is required', min: 0 })}
          />
          {errors.discipleshipStudies && <p className="text-red-500 text-xs italic">{errors.discipleshipStudies.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companionshipActivities">
            Companionship Activities
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.companionshipActivities ? 'border-red-500' : ''}`}
            id="companionshipActivities"
            type="number"
            placeholder="Number of companionship activities"
            {...register('companionshipActivities', { required: 'This field is required', min: 0 })}
          />
          {errors.companionshipActivities && <p className="text-red-500 text-xs italic">{errors.companionshipActivities.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projects">
            Projects
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.projects ? 'border-red-500' : ''}`}
            id="projects"
            type="number"
            placeholder="Number of projects"
            {...register('projects', { required: 'This field is required', min: 0 })}
          />
          {errors.projects && <p className="text-red-500 text-xs italic">{errors.projects.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Activity
          </button>
        </div>
      </form>
      {renderChart()}
    </div>
  );
};

export default MissionaryActivity;