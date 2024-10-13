import React from 'react';
import { useForm } from 'react-hook-form';

type WeeklyData = {
  membersPresent: number;
  dailyStudy: number;
  offerings: number;
  visitors: number;
  branchSchools: number;
  souls: number;
};

const QuarterlyReport: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<WeeklyData>();

  const onSubmit = (data: WeeklyData) => {
    console.log(data);
    // TODO: Implement submission logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quarterly Statistical Report</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="membersPresent">
            Members Present
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.membersPresent ? 'border-red-500' : ''}`}
            id="membersPresent"
            type="number"
            placeholder="Number of members present"
            {...register('membersPresent', { required: 'This field is required', min: 0 })}
          />
          {errors.membersPresent && <p className="text-red-500 text-xs italic">{errors.membersPresent.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dailyStudy">
            Daily Study
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.dailyStudy ? 'border-red-500' : ''}`}
            id="dailyStudy"
            type="number"
            placeholder="Number of daily study participants"
            {...register('dailyStudy', { required: 'This field is required', min: 0 })}
          />
          {errors.dailyStudy && <p className="text-red-500 text-xs italic">{errors.dailyStudy.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offerings">
            Offerings
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.offerings ? 'border-red-500' : ''}`}
            id="offerings"
            type="number"
            step="0.01"
            placeholder="Total offerings"
            {...register('offerings', { required: 'This field is required', min: 0 })}
          />
          {errors.offerings && <p className="text-red-500 text-xs italic">{errors.offerings.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitors">
            Visitors
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.visitors ? 'border-red-500' : ''}`}
            id="visitors"
            type="number"
            placeholder="Number of visitors"
            {...register('visitors', { required: 'This field is required', min: 0 })}
          />
          {errors.visitors && <p className="text-red-500 text-xs italic">{errors.visitors.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branchSchools">
            Branch Schools
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.branchSchools ? 'border-red-500' : ''}`}
            id="branchSchools"
            type="number"
            placeholder="Number of branch schools"
            {...register('branchSchools', { required: 'This field is required', min: 0 })}
          />
          {errors.branchSchools && <p className="text-red-500 text-xs italic">{errors.branchSchools.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="souls">
            Souls
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.souls ? 'border-red-500' : ''}`}
            id="souls"
            type="number"
            placeholder="Number of souls"
            {...register('souls', { required: 'This field is required', min: 0 })}
          />
          {errors.souls && <p className="text-red-500 text-xs italic">{errors.souls.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuarterlyReport;