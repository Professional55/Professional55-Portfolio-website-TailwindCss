import React from 'react';

import Card from './Card';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: 'Todo List',
    desc: 'A React & Typescript based app for managing and organizing your tasks efficiently.',
    img: '/0image.jpg',
    tags: ['REACT', 'NODE', 'CSS', 'TYPESCRIPT'],
  },
  {
    id: 1,
    title: 'Countdown Timer',
    desc: 'A Next.js and Typescript powered website to track time with an interactive countdown feature.',
    img: '/1image.jpg',
    tags: ['NEXT.js', 'NODE', 'CSS', 'TYPESCRIPT'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    desc: 'A portfolio website using HTML and CSS.',
    img: '/2image.png',
    tags: ['HTML', 'CSS', 'Typescript'],
  },
  {
    id: 3,
    title: 'Currency Converter Project',
    desc: 'A simple HTML and Typescript powered tool for converting currencies with real-time rates.',
    img: '/3image.jpg',
    tags: ['React', 'NODE', 'CSS', 'TYPESCRIPT'],
  },
  {
    id: 4,
    title: 'Static Interactive Resume',
    desc: 'An interactive resume built with HTML, CSS, and Typescript.',
    img: '/4image.png',
    tags: ['HTML', 'NODE', 'CSS', 'TYPESCRIPT'],
  },
  {
    id: 5,
    title: 'Simple Calculator Project',
    desc: 'A basic HTML, CSS, and Typescript calculator for performing essential arithmetic operations.',
    img: '/5image.jpg',
    tags: ['HTML', 'NODE', 'CSS', 'TYPESCRIPT'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-16">
      <Heading title="My Projects"  />
      <div className="container mx-auto px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              desc={project.desc}
              img={project.img}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
