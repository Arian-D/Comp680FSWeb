import FileSingleCard from './FileSingleCard';

const FileCard = ({files}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {files.map((item) => (
            <FileSingleCard key={item._id} file={item}/>
        ))}
    </div>
  );
};

export default FileCard