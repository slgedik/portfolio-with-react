import React from 'react';
import { FaGithub } from 'react-icons/fa';
export default function Project() {
    function handleClick(){
        window.open('https://github.com/slgedik', '_blank');
    }
    return (
        <div id="projects" className="projects items-center " style={{
            backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/040/517/714/small/white-fabric-loop-animated-background-free-video.jpg)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',  
          }}>
            <h2 className='pt-6 pb-4 underline decoration-wavy italic font-semibold decoration-rose-800'>To Access My Projects</h2>
            <div
                className="items-center flex justify-center hover:text-teal-200"
               
            >
                <button
                onClick={handleClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    /*backgroundColor: '#333',*/
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
                className='bg-[#333] hover:bg-black'
                >
                <FaGithub style={{ marginRight: '8px' }} size={20} />
                Click Here
                </button>
            </div>
        </div>
    );
}
