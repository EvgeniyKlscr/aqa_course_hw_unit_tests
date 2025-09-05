/*
На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const baseURL = 'https://jsonplaceholder.typicode.com';

async function userList(URL) {
  try {
    const response = await fetch(URL + '/users');
    if (!response.ok) throw new Error(response.status);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error.message);
  }
}

async function albumsList(URL) {
  try {
    const response = await fetch(URL + '/albums');
    if (!response.ok) throw new Error(response.status);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error.message);
  }
}

async function photosList(URL) {
  try {
    const response = await fetch(URL + '/photos');
    if (!response.ok) throw new Error(response.status);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error.message);
  }
}

async function finalResponse(usersFn, albumsFn, photosFn, URL) {
  try {
    const [users, albums, photos] = await Promise.all([usersFn(URL), albumsFn(URL), photosFn(URL)]);

    users.forEach((item, index) => {
      const { name, email, phone, company } = item;
      const usersAlbums = albums.filter((album) => album.userId === item.id);
      const albumsPhotos = usersAlbums
        .map((album) => {
          const photoCount = photos.filter((photo) => photo.albumId === album.id).length;
          return `${album.title} (${photoCount} photos)`;
        })
        .join('\n          ');

      console.log(`
      ${index + 1}. 
        name: ${name}
        email: ${email}
        phone: ${phone}
        company: ${company.name}
        albums:
          ${albumsPhotos}
      _______________________________________________________________________________________
      `);
    });
  } catch (error) {
    console.error(error.message);
  }
}
finalResponse(userList, albumsList, photosList, baseURL);
