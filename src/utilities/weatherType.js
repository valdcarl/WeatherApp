// used to extract data from the WeatherAPI

export const weatherType = {
    Thunderstorm: {
        icon: 'zap',
        message: 'Potential Thunderstorms',
        backgroundColor: '#000000'
    },
    Drizzle: {
        icon: 'cloud-rain',
        message: 'Potential Rainfall',
        backgroundColor: '#36454f'
    },
    Rain: {
        icon: 'umbrella',
        message: 'Raining',
        backgroundColor: '#0000ff'
    },
    Snow: {
        icon: 'cloud-snow',
        message: 'Snowing',
        backgroundColor: '#7f6065'
    },
    Clear: {
        icon: 'sun',
        message: 'Clear Skies',
        backgroundColor: '#e47200'
    },
    Clouds: {
        icon: 'cloud',
        message: 'Cloudy',
        backgroundColor: '#363636'
    },
    Haze: {
        icon: 'wind',
        message: 'Windy/Haze',
        backgroundColor: '#58586e'
    },
    Mist: {
        icon: 'align-justify',
        message: 'Misty',
        backgroundColor: '#3e3e37'
    }
}