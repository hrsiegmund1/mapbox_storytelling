var config = {
    style: 'mapbox://styles/siegmuhr/cmaebo14w009l01s7d66979zt',
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
            title: 'The Color Purple',
            image: 'https://github.com/hrsiegmund1/mapbox_storytelling/blob/main/The%20Color%20Purple%20Cover%20Hannah.jpg?raw=true',
            description: 'Explore Celie\'s journey of agency through movement and transaction in The Color Purple.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
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
                zoom: 6.3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
    id: 'color-purple-shug',
    alignment: 'centered',
    hidden: false,
    title: 'Liberation with Shug',
    image: 'assets/Shug and celie image.jpeg',
description: "Shug Avery’s arrival disrupts the household's dynamic and opens Celie to new visions of identity, autonomy, and love. Shug encourages Celie to see herself as more than a victim, and this contributes to Celie's journey of independence later in the novel. Their move to Memphis represents a break from the past, and the home they share becomes a space of healing and transformation. Shug encourages Celie to pursue her pants-making business. Celie begins to sell pants that she makes herself. This furthers the notion of Celie's agency as a Black woman in the novel. \"I sit in the dining room making pants after pants. I got pants now in every color and size under the sun.\" (Walker, Page 210)",
    location: {
        center: [-90.0519, 35.1486], // Shug and Celie's Memphis home
        zoom: 7,
        pitch: 30,
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
            title: 'Nettie\'s Time with the Olinka in Africa',
            description: 'Nettie\'s time in Africa with the Olinka people as a missionary highlights movement directly relating to women\'s agencry in the novel. This also directly relates to the shared struggles of women across cultures. Nettie witnesses how young girls are limited due to their gender. Tashi is originally resistant to cultural practices and this mirrors Nettie\'s awareness of female agency, as she write in her letters to Celie. \"Why can\'t Tashi come to school? she asked me. When I told her the Olinka don\'t believe in educating girls she said wuick as a flash, They are like white people at home who do not want colored people to learn.\" (Walker, Page 155) ',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'assets/TEWWG Novel Coveer.jpg',
            description: 'The novel begins with Janie\'s return to Eatonville. This demonstrates her agency as a woman because as the community around her gossips about her, Janie takes control of the story and chooses to reclaim her voice. The novel is a portrayl of her self-discovery and female empowerment. She has control over her narrative through this movement.',
            location: {
    center: [-81.4359, 28.6153],  // Correct coordinates for Eatonville, FL
    zoom: 12,
    pitch: 30,
    bearing: 0
},
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
