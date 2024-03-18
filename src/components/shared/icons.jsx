import React from 'react';

const  PlaylistIcon = () => {
    return (
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47619 5.12211H15.9524M8.47619 0.916748H15.9524M1 14.0001H15.9524M1 9.32746H15.9524" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 0.916748L4.7381 3.25306L1 5.58937V0.916748Z" stroke="white" strokeLinejoin="round" />
        </svg>
  );
}


const LogoutIcon = () => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8749 2.375H5.54159C5.12166 2.375 4.71893 2.54181 4.422 2.83875C4.12507 3.13568 3.95825 3.53841 3.95825 3.95833V15.0417C3.95825 15.4616 4.12507 15.8643 4.422 16.1613C4.71893 16.4582 5.12166 16.625 5.54159 16.625H11.8749M15.0416 9.5L11.8749 6.33333M15.0416 9.5L11.8749 12.6667M15.0416 9.5H7.12492" stroke="white" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className='group-hover:stroke-yellow-border' />
        </svg>
    )
}

const MinimalPlayIcon = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.41591 14.6094C4.21205 14.6091 4.0118 14.5556 3.83485 14.4544C3.43642 14.2286 3.18872 13.7903 3.18872 13.3145V3.68561C3.18872 3.20848 3.43642 2.77152 3.83485 2.54574C4.01601 2.44163 4.22181 2.38809 4.43074 2.39072C4.63966 2.39335 4.84405 2.45205 5.02253 2.56068L13.2519 7.4867C13.4234 7.59424 13.5648 7.74358 13.6628 7.92071C13.7608 8.09784 13.8122 8.29696 13.8122 8.49939C13.8122 8.70183 13.7608 8.90095 13.6628 9.07808C13.5648 9.25521 13.4234 9.40455 13.2519 9.51209L5.0212 14.4394C4.83855 14.5499 4.62934 14.6086 4.41591 14.6094Z" fill="white"
            className='group-hover:fill-yellow-border' />
        </svg>

    )
}

const SearchIcon = () => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10.0546" cy="9.19524" rx="8.30535" ry="8.1469" stroke="white" strokeWidth="1.69852" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.2163 15.7625L18.6426 18.0995" stroke="white" strokeWidth="1.69852" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}




export { 
    PlaylistIcon,
    LogoutIcon,
    MinimalPlayIcon,
    SearchIcon
}

