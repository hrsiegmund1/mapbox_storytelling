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
    image: './assets/shug.jpg',
description: "Shug Avery’s arrival disrupts the household's dynamic and opens Celie to new visions of identity, autonomy, and love. Shug encourages Celie to see herself as more than a victim, and this contributes to Celie's journey of independence later in the novel. Their move to Memphis represents a break from the past, and the home they share becomes a space of healing and transformation. Shug encourages Celie to pursue her pants-making business. Celie begins to sell pants that she makes herself. This furthers the notion of Celie's agency as a Black woman in the novel. \"I sit in the dining room making pants after pants. I got pants now in every color and size under the sun.\" (Walker, Letter 76)",
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
            title: 'Olinka',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
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
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
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
