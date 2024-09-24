const BirthdayReminderCard = (props) => {
  return (
    <li className="hover:bg-slate-500 hover:bg-opacity-10">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Name: {props.firstName +  " " + props.lastName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Note: {props.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
           Birth Date: {props.birthDate}
          </p>
          <button className="font-medium text-indigo-600 hover:text-indigo-500">
            Update
          </button>
        </div>
      </div>
    </li>
  );
};

export default BirthdayReminderCard;
