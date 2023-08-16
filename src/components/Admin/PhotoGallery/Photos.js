export const photos = [];

fetch('https://give-server.vercel.app/photo-gallery')
  .then(res => res.json())
  .then(data => {
    data.forEach(photo => {
      photos.push(photo);
    });
  });

