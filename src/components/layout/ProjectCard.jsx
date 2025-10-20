import React, {useState} from 'react'

const ProjectCard = ({title, description, link, image, tech, details}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className='bg-white border rounded-2xl shadow-lg p-4 hover:scale-105 transform transition duration-300'>
                {image && (
                 <img
                 src={image}
                 alt={title}
                 className='w-full h-48 object-cover rounded-xl mb-4' 
                  />   
                )}
                <h3 className='text-2xl font-semibold text-gray-900 mb-2'>{title}</h3>
                <p className='text-gray-600 mb-2'>{description}</p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2 mb-2'>
                    {tech.map((t, index)=> (
                        <span 
                            key={index}
                            className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full'
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className='flex justify-between items-center'>
                    <a href={link} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 font-medium hover:underline'
                    >
                        View Project →
                    </a>
                    <button 
                    onClick={()=> setIsModalOpen(true)}
                    className='bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition'
                    >
                        See More
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
                    <div className='bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative'>
                        <button 
                        onClick={()=> setIsModalOpen(false)}
                        className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold'
                        >
                            &times;
                        </button>
                        <h3 className='text-3xl font-bold mb-4'>{title}</h3>
                        <p className='text-gray-700 mb-4'>{details}</p>

                        {tech.length > 0 && (
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {tech.map((t,i)=> (
                                    <span 
                                        key={i}
                                        className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full'                                    
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}

                        {image && (
                            <img 
                                src={image}
                                alt={title}
                                className="w-full h-64 object-cover rounded-xl mb-4" 
                            />
                        )}

                        <a
                            href={link}
                            target="_blank"
                            ref="noopener noreferrer"
                            className='text-blue-600 font-medium hover:underline' 
                        >
                            Visit Project →
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard