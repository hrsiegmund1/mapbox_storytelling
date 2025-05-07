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
    footer: 'Source: primary texts, student data, and literary interpretation. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro-agency',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction – Agency in Motion',
            image: './assets/harrisonburg_intro.jpg',
            description: 'This project explores how Southern women assert agency through spatial movement and economic decisions. Using data and scenes from The Color Purple, Their Eyes Were Watching God, and Salvage the Bones, this map visualizes gendered labor, resistance, and mobility across the South.',
            location: {
                center: [-78.8689, 38.4496],
                zoom: 5,
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
            id: 'colorpurple-home',
            alignment: 'centered',
            hidden: false,
            title: 'Celie’s Childhood Home – Gendered Control of Goods',
            image: './assets/celie_home.jpg',
            description: '"Dear God. I am fourteen years old." At the heart of Celie’s early life, her home becomes the backdrop for economic decisions controlled by men. Albert and Alphonso dominate exchanges of livestock and farm goods, while Celie’s agency is nearly invisible in the data.',
            location: {
                center: [-83.3850, 33.0205],
                zoom: 10,
                pitch: 50,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'colorpurple-store',
            alignment: 'right',
            hidden: false,
            title: 'Town Store – Female Economic Exchange',
            image: './assets/fabric_store.jpg',
            description: 'Corrine, a White missionary, purchases fabric using money at a town store. It’s one of the few female-led economic exchanges in the novel, highlighting the racial and class access gaps in Southern economies.',
            location: {
                center: [-83.5529, 33.000374],
                zoom: 12,
                pitch: 45,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'colorpurple-olinka',
            alignment: 'left',
            hidden: false,
            title: 'Olinka Mission – Exporting Gender Roles',
            image: './assets/olinka_map.jpg',
            description: '"The Olinka do not believe girls should be educated." Nettie’s mission work highlights how gendered economic exclusion extends beyond the U.S., showing a global limitation of women’s spatial and educational mobility.',
            location: {
                center: [-10.3788, 6.2512],
                zoom: 5,
                pitch: 35,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tewg-store',
            alignment: 'right',
            hidden: false,
            title: 'Eatonville Store – Janie’s Economic Labor',
            image: './assets/eatonville_store.jpg',
            description: '"You ain’t got no business cuttin’ up no wood, you’se a woman." Janie’s public labor at the store in Eatonville shows her visible economic role—but also the control Joe exerts over her behavior.',
            location: {
                center: [-81.3831, 28.6142],
                zoom: 10,
                pitch: 45,
                bearing: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tewg-muck',
            alignment: 'centered',
            hidden: false,
            title: 'The Everglades – Labor, Love, and Exposure',
            image: './assets/the_muck.jpg',
            description: '"She was with him on the muck… picking beans." Janie and Tea Cake work together in the fields, but the risk—and the emotional labor—remains gendered, especially as illness and grief follow.',
            location: {
                center: [-80.7975, 26.5099],
                zoom: 9,
                pitch: 50,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tewg-hurricane',
            alignment: 'left',
            hidden: false,
            title: 'The Flood – Agency in Motion',
            image: './assets/hurricane_flood.jpg',
            description: '"They seemed to be staring at the dark, but their eyes were watching God." Janie’s survival in the flood reshapes her physical and economic movement through forced migration and trauma.',
            location: {
                center: [-80.5561, 25.7617],
                zoom: 8,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stb-home',
            alignment: 'right',
            hidden: false,
            title: 'Home – Gendered Survival in the Bayou',
            image: './assets/salvage_home.jpg',
            description: '"China sniffed the floor in front of her bowl. Her teats swung when she walked." Esch’s home becomes a center of gendered caregiving and silent strength in the face of the storm.',
            location: {
                center: [-88.2486, 30.4035],
                zoom: 11,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stb-escape',
            alignment: 'centered',
            hidden: false,
            title: 'After Katrina – Displacement and Maternal Movement',
            image: './assets/katrina_aftermath.jpg',
            description: '"We have to get to Mother Lizbeth’s." Post-storm, Esch’s agency becomes movement for survival. The storm erases structure but not the need to mother, protect, and continue forward.',
            location: {
                center: [-88.0684, 30.6954],
                zoom: 10,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'centered',
            hidden: false,
            title: 'Conclusion – The Unmapped',
            image: './assets/southern_horizon.jpg',
            description: 'While these maps allow us to visualize gendered labor and movement, they cannot capture emotional burdens, inherited trauma, or personal agency in full. The data shows patterns, but stories of Southern women resist containment, echoing far beyond plotted coordinates.',
            location: {
                center: [-84.0, 33.0],
                zoom: 3,
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
