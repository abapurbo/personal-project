import React, { useRef } from 'react';
import ProjectSwiper from '../Commponets/ProjectSwiper/ProjectSwiper';

const Projects = () => {
    const detailsModal = useRef()

    // handle modal prject details
    const handleProjectDetails = (project) => {
        console.log(project)
    }
    // modal open
    const openModal=()=>{
        detailsModal.current.showModal()
    }
    const closeModal=()=>{
        detailsModal.current.close()
    }
    return (
        <section id='projects' className='container mx-auto md:py-16'>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-3xl w-fit  text-2xl font-bold text-purple-700 border-b-3 border-b-[#9333EA]'>My Project <span className='text-black'>Shokcase</span></h1>
                <ProjectSwiper handleProjectDetails={handleProjectDetails} openModal={openModal}></ProjectSwiper>
            </div>
            {/* project details modal */}
            <dialog ref={detailsModal} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p onClick={closeModal} className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </section>
    );
};

export default Projects;