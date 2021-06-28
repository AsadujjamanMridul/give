export const photos = [];

fetch('http://localhost:5000/photo-gallery')
  .then(res => res.json())
  .then(data => {
    data.forEach(photo => {
      photos.push(photo);
    });
  });

