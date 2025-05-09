var config = {
    style: 'mapbox://styles/siegmuhr/cmaft09cq007401s109o1ga79',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2llZ211aHIiLCJhIjoiY205N2tlNXZkMDg2NTJqc2ljbXFxejR0YSJ9.Nun4g2taiSsESfEZq47wig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Agency Mapped: Women in Southern Literature',
    subtitle: 'By using spatial movement and economic data across across The Color Purple, Their Eyes Were Watching God, and Salvage the Bones, greater themes of how Southern women assert agency are displayed.',
    byline: 'Hannah Siegmund',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
       
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple: Introduction',
            image: 'https://github.com/hrsiegmund1/mapbox_storytelling/blob/main/The%20Color%20Purple%20Cover%20Hannah.jpg?raw=true',
            description: 'Explore Celie\'s journey of agency through movement and transaction in The Color Purple. The Color Purple is a story of oppression to empowerment and finding a voice. The novel is read through letters between Celie and God, and Celie and her sister Nettie.',
            location: {
                center: [-83.5599840688572, 32.99976696381827],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'color-purple-start',
            alignment: 'right',
            hidden: false,
            title: "The Color Purple: Celie's Constraints",
            description: "Celie begins her journey in rural Georgia, facing cycles of abuse and poverty tied to inherited land and social roles. Celie's home holds a lot of meaning in the story. She is under the control of Alhponso at the start and does not know life other than her home. She endures abuse over time and the land and house becomes tied to her sense of identity and self-worth. The realization that Alphonso is not her biological father and that Celie inherited the home reveal that the home was never truly under his control. This location is integral to Celie in reclaiming her voice.",
            location: {
                center: [-83.5599840688572, 32.99976696381827], // Celie's home
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
    id: 'color-purple-shug',
    alignment: 'centered',
    hidden: false,
    title: 'The Color Purple: Liberation with Shug',
    image: 'assets/Shug and celie image.jpeg',
description: "Shug Avery’s arrival disrupts the household's dynamic and opens Celie to new visions of identity, autonomy, and love. Shug encourages Celie to see herself as more than a victim, and this contributes to Celie's journey of independence later in the novel. Their move to Memphis represents a break from the past, and the home they share becomes a space of healing and transformation. Shug encourages Celie to pursue her pants-making business. Celie begins to sell pants that she makes herself. This furthers the notion of Celie's agency as a Black woman in the novel. \"I sit in the dining room making pants after pants. I got pants now in every color and size under the sun.\" (Walker, Page 210)",
    location: {
        center: [-90.0519, 35.1486], // Shug and Celie's Memphis home
        zoom: 8,
        pitch: 0,
        bearing: -10
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},

        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple: Nettie\'s Time with the Olinka in Africa',
            description: 'Nettie\'s time in Africa with the Olinka people as a missionary highlights movement directly relating to women\'s agencry in the novel. This also directly relates to the shared struggles of women across cultures. Nettie witnesses how young girls are limited due to their gender. Tashi is originally resistant to cultural practices and this mirrors Nettie\'s awareness of female agency, as she write in her letters to Celie. \"Why can\'t Tashi come to school? she asked me. When I told her the Olinka don\'t believe in educating girls she said wuick as a flash, They are like white people at home who do not want colored people to learn.\" (Walker, Page 155) ',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tewwg-title',  // New introductory chapter for *Their Eyes Were Watching God*
            alignment: 'centered',
            hidden: false,
            title: 'Their Eyes Were Watching God: Introduction',
            image: 'TEWWG Cover 2 - Hannah.jpg',  // 
            description: 'Zora Neale Hurston’s *Their Eyes Were Watching God* tells the story of Janie Crawford, a woman seeking independence and self-realization in the face of societal constraints. This chapter marks the beginning of Janie’s journey toward reclaiming her voice and asserting her agency.',
            location: {
                center: [-81.4359, 28.6153],  // Coordinates for Eatonville, FL
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God: Beginning of Janie\'s agency',
            image: 'assets/TEWWG Novel Coveer.jpg',
            description: 'The novel begins with Janie\'s return to Eatonville. This demonstrates her agency as a woman because as the community around her gossips about her, Janie takes control of the story and chooses to reclaim her voice. This movement of the novel beginning in Eatonville begins the journey of her self-discovery and female empowerment.',
            location: {
    center: [-81.4359, 28.6153],  // Correct coordinates for Eatonville, FL
    zoom: 12,
    pitch: 0,
    bearing: 0
},
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tewwg-joe-starks-marriage',  // New chapter for Joe Starks' marriage to Janie
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes Were Watching God: Marriage to Joe Starks',
            description: "Janie’s marriage to Joe Starks represents the beginning of her struggle for agency. While Joe provides Janie with financial stability and the opportunity to live in Eatonville, he controls her every move, limiting her voice and her sense of self. As Joe expects Janie to fulfill the role of a silent, obedient wife, she begins to recognize that true empowerment comes from being able to express herself freely. This chapter marks a key moment in Janie's journey toward self-realization and independence. Joe attempts to silence Janie, saying, \"You ain’t got no business talkin’ to me like that. You ain’t got no business bein’ so independent. A woman is a mule to her husband.\" (Hurston, Chapter 5). Janie remaining in Eatonville through this marriage and not going elseway shows how her agency is different at the beginning of the novel.",
            location: {
                center: [-81.38643808791495, 28.618579170446417],  // Coordinates for Eatonville, FL
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
     {
            id: 'chapter-four',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God: The Muck with Tea Cake',
            image: 'The Everglades.jpeg',  // Make sure to upload the appropriate image for this chapter
            description: "Janie and Tea Cake move to the Everglades, where they work in the muck. This chapter marks a significant shift in Janie's journey toward agency. In the muck, she experiences true freedom and pure love for the first time, a significant difference from Joe. Here, Janie finds happiness and self-expression. The muck is where Janie truly learns what it means to live on her own terms, contributing to her growing sense of empowerment and independence.",
            location: {
                center: [-81.38478, 25.85764],  // Coordinates for the muck in the Everglades
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
    id: 'salvage-bones-introduction',
    alignment: 'centered',
    hidden: false,
    title: 'Salvage the Bones: Introduction',
    image: 'Tree Salvage Cover.jpg',  // Make sure the image is in the assets folder
    description: "Jesmyn Ward’s Salvage the Bones introduces Esche, a young girl growing up in the South in the days leading up to Hurricane Katrina. Esche has a journey to self empowerment and displays women's agency.",
    location: {
        center: [-89.26344602946764, 30.37877669386771],  // Coordinates for the rural Mississippi setting (the novel's setting)
        zoom: 12,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
{
    id: 'salvage-bones-cow-wormer-theft',
    alignment: 'right',
    hidden: false,
    title: 'Salvage the Bones: Stealing the Cow Wormer',
    image: 'Salvage the Bones.jpg',  // Image for the cow wormer theft scene
    description: "Skeetah recruits Esche to steal a cow wormer from a white family’s farm. Though initially seen as an act of necessity, this moment highlights Esche’s emerging agency, because she had the choice to help her brother commit a transaction of theft or to stay out of it, especially considering she is pregnant. As she participates in this act of theft, Esche not only contributes to the survival of her family and pit bull but also begins to see herself as capable of making her own decisions, even when they defy societal norms. This act of defiance marks the beginning of Esche’s journey toward empowerment.",
    location: {
        center: [-89.26908066564593, 30.40185596106536],  // Coordinates near the white people's farm or a symbolic location
        zoom: 8,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,  // No rotate animation
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
}, 
{
    id: 'salvage-bones-eggs-in-pit',  // New chapter for Esche finding eggs
    alignment: 'left',
    hidden: false,
    title: 'Salvage the Bones: Esche Finding Eggs in the Pit',
    description: "As Esche looks for eggs the pit, she begins to assert agency over her pregnancy and body. She also parallels her own mother through the location being their home in the Pit and this transaction of finding eggs. \"Mama taught me how to find eggs in the pit, to give the birds their freedom even though they couldn’t see the sky.\" (Ward, Chapter 4)",  // Added quote here
    location: {
        center: [-89.26344602946764, 30.37877669386771],  // Coordinates for Batiste Property
        zoom: 12,  // Updated zoom level
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,  // No rotate animation
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
}, 
{
    id: 'salvage-bones-pregnancy-test-theft',
    alignment: 'right',
    hidden: false,
    title: 'Salvage the Bones: Pregnancy Test Theft',
    description: "In this moment, Esche steals a pregnancy test from a store in St. Catherine. This act highlights Esche’s agency. In a world where women’s reproductive choices are often controlled or overlooked, Esche’s act of stealing the test in St. Catherine displays her search for control over her own body and her ability to make decisions for herself.",
    location: {
        center: [-89.0553816234266, 30.443067376446155],  // Coordinates near the store in St. Catherine
        zoom: 8,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,  // No rotate animation
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
{
    id: 'limitations-of-data',
    alignment: 'centered',
    hidden: false,
    title: 'Limitations of the Data',
    description: `
        As with any dataset, there are certain limitations to the information we have gathered throughout this project. 
        These include potential biases in the sources, incomplete records from putting in data outside of class, and gaps in the available data, such as 
        missing geographic coordinates for some entries. Some points in these novels were fictional and had to be interpreted as to what locations it would be near. Furthermore, the data's scope is limited to 
        certain locations and may not fully capture the broader contexts or provide insights into the experiences of 
        all the characters involved. These limitations must be acknowledged when interpreting the findings from this dataset.`,
    location: {
        center: [-90.3150946, 38.6605671], // Example coordinates for placement on map (no specific location needed)
        zoom: 6.5,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
{
    id: 'power-of-the-data',
    alignment: 'centered',
    hidden: false,
    title: 'The Power of the Data: Black Women’s Agency in the South',
    image: 'assets/power-of-the-data-image.jpg',  // Main image for the chapter (optional)
    description: 'The data that we have gathered as a class throughout this semester offers new insights into the powerful yet often overlooked narratives of Black women asserting agency in the South. By studying economic transactions and movements through a spatial map, we uncover the ways in which these women navigate oppressive structures and reclaim their narrative. In The Color Purple, Their Eyes Were Watching God, and Salvage the Bones, the data reveals ho these women open space for self-expression and autonomy. The decisions they make tell a story of resilience, transformation, independence, and growth. This data approach shows how race, gender, and class in the South intersect. The data visually captures moments of Black women’s resilience and agency, making it an undeniable part of Southern history and culture.',
    location: {
        center: [-90.3150946, 38.6605671],  // Coordinates for an appropriate Southern location
        zoom: 6.5,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: [],
    extraContent: `
        <div style="display: flex; justify-content: space-between;">
            <img src="Alice face pic.png" alt="Image 1" style="width: 30%; margin-right: 10px;" />
            <img src="Hurston book pic.webp" alt="Image 2" style="width: 30%; margin-right: 10px;" />
            <img src="Jesmyn Ward pic.avif" alt="Image 3" style="width: 30%;" />
        </div>
    `
}




    ]
};
