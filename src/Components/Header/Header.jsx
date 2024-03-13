import boy1 from '../../assets/images/boy1.png'

const Header = () => {
  return (
    <div className='w-full px-80'>
      <div className='flex justify-between  items-center border-b-2 py-14'>
      <h1 className='text-4xl font-semibold'>React Blog</h1>
      <img src={boy1} alt="" className='size-20' />
      </div>
    </div>
  );
};

export default Header;