var config = {
    style: 'mapbox://styles/siegmuhr/cmadchomj001u01s8a8itf84y',
    accessToken: 'pk.eyJ1IjoiYnpk.eyJ1Ijoic2llZ211aHIiLCJhIjoiY205N2tlNXZkMDg2NTJqc2ljbXFxejR0YSJ9.Nun4g2taiSsESfEZq47wigVyZ2VyamgiLCJhIjoiY20yc3IyZXozMDBqdTJ2b3BpY3M3aWNqcCJ9.BRJ_B6H5_MYZ7Q_PBxcaQg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Agency Mapped: Southern Women in Literature',
    subtitle: 'Spatial Journeys across the South',
    byline: 'Hannah Siegmund',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-colorpurple-opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/Keezell_Hall.jpg',
            description: 'This is where I insert a description of the novel',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Someplace Georgia',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-colorpurple-cover',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple – Cover',
            image: './assets/color_purple_cover.jpg',
            description: 'This is where I insert a description of the novel',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
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
            alignment: 'centered',
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