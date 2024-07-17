// Example project data
const projects = [
    {
        id: 1,
        title: 'This website',
        description: 'Description for project 1.',
        images: [
            'path/to/project1-image1.jpg',
            'path/to/project1-image2.jpg',
        ]
    },
    {
        id: 2,
        title: 'Real Estate Price Calculator',
        description: 'Description for project 2.',
        images: [
            'path/to/project2-image1.jpg',
            'path/to/project2-image2.jpg',
        ]
    },
    {
        id: 3,
        title: 'Sports Statistics Analysis',
        description: 'Description for project 3.',
        images: [
            'path/to/project3-image1.jpg',
            'path/to/project3-image2.jpg',
        ]
    },
    {
        id: 4,
        title: 'Business Document Segragator',
        description: 'Description for project 3.',
        images: [
            'path/to/project3-image1.jpg',
            'path/to/project3-image2.jpg',
        ]
    }
];

function showProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        document.getElementById('project-title').innerText = project.title;
        document.getElementById('project-description').innerText = project.description;

        const imagesContainer = document.getElementById('project-images');
        imagesContainer.innerHTML = '';
        project.images.forEach(src => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            const img = document.createElement('img');
            img.src = src;
            img.alt = project.title;
            img.className = 'img-thumbnail';
            col.appendChild(img);
            imagesContainer.appendChild(col);
        });

        document.getElementById('project-grid').style.display = 'none';
        document.getElementById('project-details').style.display = 'block';
    }
}

function hideProjectDetails() {
    document.getElementById('project-grid').style.display = 'flex';
    document.getElementById('project-details').style.display = 'none';
}