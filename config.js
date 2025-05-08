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
                center: [-90.3150946, 38.6605671],
                zoom: 6.5,
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
    id: 'color-purple-shug',
    alignment: 'centered',
    hidden: false,
    title: 'The Color Purple: Liberation with Shug',
    image: 'assets/Shug and celie image.jpeg',
description: "Shug Avery’s arrival disrupts the household's dynamic and opens Celie to new visions of identity, autonomy, and love. Shug encourages Celie to see herself as more than a victim, and this contributes to Celie's journey of independence later in the novel. Their move to Memphis represents a break from the past, and the home they share becomes a space of healing and transformation. Shug encourages Celie to pursue her pants-making business. Celie begins to sell pants that she makes herself. This furthers the notion of Celie's agency as a Black woman in the novel. \"I sit in the dining room making pants after pants. I got pants now in every color and size under the sun.\" (Walker, Page 210)",
    location: {
        center: [-90.0519, 35.1486], // Shug and Celie's Memphis home
        zoom: 6.5,
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
                zoom: 6.5,
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
                zoom: 6.5,
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
            title: 'Their Eyes Were Watching God',
            image: 'assets/TEWWG Novel Coveer.jpg',
            description: 'The novel begins with Janie\'s return to Eatonville. This demonstrates her agency as a woman because as the community around her gossips about her, Janie takes control of the story and chooses to reclaim her voice. The novel is a portrayl of her self-discovery and female empowerment. She has control over her narrative through this movement.',
            location: {
    center: [-81.4359, 28.6153],  // Correct coordinates for Eatonville, FL
    zoom: 7,
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
            id: 'chapter-three',
            alignment: 'centered',
            hidden: false,
            title: 'Their Eyes Were Watching God: The Muck',
            image: 'The Everglades.jpeg',  // Make sure to upload the appropriate image for this chapter
            description: "Janie and Tea Cake move to the Everglades, where they work in the muck. This chapter marks a significant shift in Janie's journey toward agency. In the muck, she experiences true freedom and pure love for the first time, a significant difference from Joe. Here, Janie finds happiness and self-expression. The muck is where Janie truly learns what it means to live on her own terms, contributing to her growing sense of empowerment and independence.",
            location: {
                center: [-81.38478, 25.85764],  // Coordinates for the muck in the Everglades
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
    id: 'salvage-bones-introduction',
    alignment: 'centered',
    hidden: false,
    title: 'Salvage the Bones: Introduction',
    image: 'assets/salvage_the_bones_cover.jpg',  // Make sure the image is in the assets folder
    description: "Jesmyn Ward’s Salvage the Bones introduces Esche, a young girl growing up in the South in the days leading up to Hurricane Katrina. Esche has a journey to self empowerment and displays women's agency",
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
}
    ]
};
