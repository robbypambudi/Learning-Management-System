type OverviewCardProps = {
  title: string;
  count: number;
};

const OverviewCard = ({ title, count }: OverviewCardProps) => {
  return (
    <div className='bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center min-h-32 justify-center'>
      <p className='text-gray-500 text-sm font-medium'>{title}</p>
      <p className='text-blue-600 text-2xl font-bold'>{count}</p>
    </div>
  );
};

export default OverviewCard;
