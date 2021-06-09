import React from 'react';
import Project from '../Project/Project';
export const projectData = [
  {
    id: 1,
    projectName: 'bbn Network ',
    img1: 'https://i.ibb.co/6P3CTGF/download-1.jpg',
    description: "It is an agency website, which serves some services like web development, graphics design, mobile application design, photography etc. All the facilities of this website are listed here:<ul><li>Admin can see all order lists of the users and change the order's status by drop down menu.</li><li>Admin can add more services</li><li>Admin can make a person 'Admin' by providing those person's email.</li><li>User can order a service by providing a demo picture</li><li>User can see his all orders and order's status.</li><li>User can submit a review about a service, which are shown in the homepage randomly.</li></ul>",
    liveWebsite: 'https://bb-network-5f38e.web.app/',
    github: 'https://github.com/Porgramming-Hero-web-course/complete-website-client-rakibulhasan933',
    technology: ['HTML5', 'CSS3', 'Bootstrap4', 'React Bootstrap', 'JavaScript', 'React.js', 'React Router', 'Material UI', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 2,
    projectName: 'Walker t-shirt',
    img1: 'https://i.ibb.co/Qbh500H/images-1.jpg',
    description: "It is a website for registering volunteers in many events and manage them. I have listed below some features of it.<ul><li>Volunteers can register for work.</li><li>User and Admin can sign up and log in to this website using google.</li><li>User can register for an event.</li><li>User can see his/her all registered event list.</li><li>There is a dashboard for admin by which admin can maintain and delete the registration request of the users.</li></ul>",
    liveWebsite: 'https://store-t-shirt-walker.web.app/',
    github: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-rakibulhasan933',
    technology: ['HTML5', 'CSS3', 'Bootstrap4', 'React Bootstrap', 'JavaScript', 'React JS', 'React Router', 'Material UI', 'Node JS', 'Express JS', 'MongoDB']
  }
];

const index = () => {
  return (
    <div>
      <div className="custom-container">
        <h1 className="heading text-center pb-3 pt-5 mt-5"><span style={{ borderBottom: '5px solid #0bc2c2' }} className=""><span style={{ color: 'white' }}>My</span> <span style={{ color: '#0bc2c2' }}>Portfolio</span></span></h1>
        <div className="row">
          {
            projectData.map(project => <Project key={project.id} project={project} />)
          }
        </div>
      </div>
    </div>
  );
};

export default index;