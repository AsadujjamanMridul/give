export const photos = [];

fetch('https://enigmatic-fortress-83830.herokuapp.com/photo-gallery')
  .then(res => res.json())
  .then(data => {
    data.forEach(photo => {
      photos.push(photo);
    });
  });

