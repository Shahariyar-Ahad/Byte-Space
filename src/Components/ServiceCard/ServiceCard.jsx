import 'react';

const ServiceCard = ({service}) => { 
    const { name,icon } =service
    return (
        <div className="flex flex-wrap items-start gap-3">
  <label className="card border border-[#CED0D3] w-41.75 h-41.75 rounded-3xl">
    
    <div className="card-body items-center py-9">
      <img src={icon} className='h-15 w-15'></img>
      <p>{name}</p>
    </div>
  </label> 
  </div>
    );
};

export default ServiceCard;