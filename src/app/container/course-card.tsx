type CourseCardProps = {
  image: string;
  title: string;
  author: string;
  time: string;
};

const CourseCard = ({ image, title, author, time }: CourseCardProps) => {
  return (
    <div className='flex bg-blue-50 rounded-lg shadow-md p-4 gap-4 items-center'>
      {/* Avatar */}
      <div
        className='w-16 h-16 rounded-lg bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Course Details */}
      <div className='flex flex-col'>
        {/* Tag */}
        <span className='bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-full w-fit mb-2'>
          Web development
        </span>
        {/* Title */}
        <p className='text-gray-800 text-sm font-semibold'>{title}</p>
        {/* Author and Time */}
        <div className='flex text-gray-500 text-xs mt-1'>
          <span>{author}</span>
          <span className='ml-2'>·</span>
          <span className='ml-2'>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
