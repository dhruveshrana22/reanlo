import { Text } from "react-native";

const posts = [
    {
        id: 1,
        title: 'Dynamic Post Title 1',
        image: require('../../../../Image/movieimg1.png'),
        avatar: require('../../../../Image/movieimg1.png'),
        description: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        content: 'Finished this adorable anthology where all the stories took place around Winter Solstice/Yuletide! Even learned a little history about the Indians in Nantucket area and about the female “computers” who cataloged the stars!',
        likes: '1.2M',
        comments: '120',
        update: true,

        title2: 'Dynamic Post Title 2',
        image2: require('../../../../Image/Daughter.png'),
        avatar2: require('../../../../Image/Daughter.png'),
        description2: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        content2: 'Finished this adorable anthology where all the stories took place around Winter Solstice/Yuletide! Even learned a little history about the Indians in Nantucket area and about the female “computers” who cataloged the stars!',
        likes2: '500k',
        comments2: '50',

        image1Source: require('../../../../Image/taklo.png'),
        text: 'Falco started following Nelcy',
        image2Source: require('../../../../Image/taklo.png'),


        freind: true,

        title3: 'Dynamic Post Title 2',
        image3: require('../../../../Image/Advanture.png'),
        avatar3: require('../../../../Image/Daughter.png'),
        description3: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        likes3: '500k',
        comments3: '50',
        ctn3: <Text style={{ fontSize: 15, color: 'black', }}>
            One day, you will be old enough to start reading fairytales again.
        </Text>,


        user: true,
        title4: 'Dynamic Post Title 2',
        image4: require('../../../../Image/heripoter.png'),
        avatar4: require('../../../../Image/heripoter.png'),
        description4: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        likes4: '500k',
        comments4: '50',



        userprofile: true,
        userprofileImageSource: require('../../../../Image/taklo.png'), // Unique name for userprofile image source
        userprofileText: 'Falco started following Nelcy', // Unique name for userprofile text
        userprofileImage2Source: require('../../../../Image/taklo.png'),


        following: true,
        title3: 'Dynamic Post Title 2',
        image3: require('../../../../Image/Advanture.png'),
        image10: require('../../../../Image/TopBooks/sh.png'),
        image7: require('../../../../Image/heripoter.png'),
        avatar3: require('../../../../Image/Daughter.png'),
        description3: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        likes3: '500k',
        comments3: '50',
        ctn3: <Text style={{ fontSize: 14, color: 'black', }}>
            Ooo I bought this at a library book sale this past summer and haven‘t read it yet. Glad it‘s a winner!!
        </Text>,
        userprofileImageSource: require('../../../../Image/taklo.png'), // Unique name for userprofile image source
        userprofileText: 'Falco started following Nelcy', // Unique name for userprofile text



        following2: true,
        title5: 'Dynamic Post Title 2',
        image5: require('../../../../Image/Ground.png'),
        avatar5: require('../../../../Image/Daughter.png'),
        description5: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        likes5: '500k',
        comments5: '50',
        ctn5: <Text style={{ fontSize: 14, color: 'black', }}>
            Ooo I bought this at a library book sale this past summer and haven‘t read it yet. Glad it‘s a winner!!
        </Text>,
        userprofileImageSource: require('../../../../Image/taklo.png'), // Unique name for userprofile image source
        userprofileText: 'Falco started following Nelcy', // Unique name for userprofile text

        following3: true,
        title6: 'Dynamic Post Title 2',
        image6: require('../../../../Image/Adam.png'),
        avatar6: require('../../../../Image/Daughter.png'),
        description6: 'Sam Guy added Jane Eyre to their Books To Read Shelf',
        likes6: '500k',
        comments6: '50',
        ctn6: <Text style={{ fontSize: 14, color: 'black', }}>
            Ooo I bought this at a library book sale this past summer and haven‘t read it yet. Glad it‘s a winner!!
        </Text>,
        userprofileImageSource: require('../../../../Image/taklo.png'), // Unique name for userprofile image source
        userprofileText: 'Falco started following Nelcy', // Unique name for userprofile text

        books: true,
        book1: require('../../../../Image/books/waybook.png'), // Assuming image1.png is located in the 'images' folder of your project
        book2: require('../../../../Image/books/girlbook.png'), // Assuming image1.png is located in the 'images' folder of your project
        book3: require('../../../../Image/books/mordenspicebook.png'), // Assuming image1.png is located in the 'images' folder of your project
        book4: require('../../../../Image/books/animalbook.png'), // Assuming image1.png is located in the 'images' folder of your project
        book5: require('../../../../Image/books/animalbook.png'), // Assuming image1.png is located in the 'images' folder of your project
        booktitle:"Ooo I bought this at a library book sale this past summer and haven't read it yet. Glad it's a winner!!"
    },




];


// Combining both arrays
const combinedData = posts.map(post => {

    return { ...post };
});

export default combinedData;