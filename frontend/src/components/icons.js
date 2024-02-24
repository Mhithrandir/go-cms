function Icon({Icon}) {
    return (
        <>
            { Icon === 'Save' &&
                <svg className="svg-icon" viewBox="0 0 16 16"><g fill="none"><path d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1V9.5A1.5 1.5 0 0 1 5.5 8h5A1.5 1.5 0 0 1 12 9.5V13a1 1 0 0 0 1-1V5.621a1 1 0 0 0-.293-.707l-1.621-1.621A1 1 0 0 0 10.379 3H10v1.5A1.5 1.5 0 0 1 8.5 6h-2A1.5 1.5 0 0 1 5 4.5V3H4zm2 0v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V3H6zm5 10V9.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V13h6zM2 4a2 2 0 0 1 2-2h6.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 14 5.621V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'EyeOpen' &&
                <svg className="svg-icon" viewBox="0 0 16 16"><g fill="none"><path d="M10.12 10.827l4.026 4.027a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.23 3.23A5.987 5.987 0 0 0 3.2 6.182a6.7 6.7 0 0 0-1.117 1.982c-.021.061-.047.145-.047.145l-.018.062s-.076.497.355.611a.5.5 0 0 0 .611-.355l.001-.003l.008-.025l.035-.109a5.7 5.7 0 0 1 .945-1.674a4.94 4.94 0 0 1 1.124-1.014l1.578 1.578a2.5 2.5 0 1 0 3.446 3.446zm-.74-.74A1.5 1.5 0 1 1 7.413 8.12l1.969 1.968zM6.32 4.2l.854.854C7.434 5.019 7.709 5 8 5c2.044 0 3.286.912 4.028 1.817a5.695 5.695 0 0 1 .945 1.674c.017.048.028.085.035.109l.008.025v.003l.001.001a.5.5 0 0 0 .966-.257v-.003l-.001-.004l-.004-.013a2.3 2.3 0 0 0-.06-.187a6.7 6.7 0 0 0-1.117-1.982C11.905 5.088 10.396 4 8.002 4c-.618 0-1.177.072-1.681.199z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'EyeClosed' &&
                <svg className="svg-icon" viewBox="0 0 16 16"><g fill="none"><path d="M2.984 8.625v.003a.5.5 0 0 1-.612.355c-.431-.114-.355-.611-.355-.611l.018-.062s.026-.084.047-.145a6.7 6.7 0 0 1 1.117-1.982C4.096 5.089 5.605 4 8 4s3.904 1.089 4.802 2.183a6.7 6.7 0 0 1 1.117 1.982a4.077 4.077 0 0 1 .06.187l.003.013v.004l.001.002a.5.5 0 0 1-.966.258l-.001-.004l-.008-.025a4.872 4.872 0 0 0-.2-.52a5.696 5.696 0 0 0-.78-1.263C11.286 5.912 10.044 5 8 5c-2.044 0-3.285.912-4.028 1.817a5.7 5.7 0 0 0-.945 1.674a3.018 3.018 0 0 0-.035.109l-.008.025zM8 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM6.5 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'Filter' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2zM6 6v3.59l8 8V26h4v-8.41l8-8V6z" fill="currentColor"></path></svg>
            }
            { Icon === 'Sort' &&
                <svg className="svg-icon" viewBox="0 0 20 20"><g fill="none"><path d="M14.84 16.722a.762.762 0 0 1-.59.278a.731.731 0 0 1-.527-.22l-3.004-3.008a.75.75 0 0 1 0-1.06a.748.748 0 0 1 1.06 0l1.721 1.732V3.75a.75.75 0 0 1 1.5 0v10.684l1.722-1.718a.748.748 0 0 1 1.059 0a.75.75 0 0 1 0 1.06l-2.942 2.946zM6.34 3.278A.762.762 0 0 0 5.75 3a.731.731 0 0 0-.527.22L2.22 6.228a.75.75 0 0 0 0 1.06a.748.748 0 0 0 1.06 0L5 5.557V16.25a.75.75 0 0 0 1.5 0V5.566l1.722 1.718a.748.748 0 0 0 1.059 0a.75.75 0 0 0 0-1.06L6.339 3.277z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'SortDescending' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M18 22l1.414-1.414L23 24.172V4h2v20.172l3.586-3.586L30 22l-6 6l-6-6z" fill="currentColor" transform="rotate(180 24 16)"></path><path d="M2 6h14v2H2z" fill="currentColor"></path><path d="M6 12h10v2H6z" fill="currentColor"></path><path d="M10 18h6v2h-6z" fill="currentColor"></path></svg>
            }
            { Icon === 'SortAscending' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M18 22l1.414-1.414L23 24.172V4h2v20.172l3.586-3.586L30 22l-6 6l-6-6z" fill="currentColor"></path><path d="M2 6h14v2H2z" fill="currentColor"></path><path d="M6 12h10v2H6z" fill="currentColor"></path><path d="M10 18h6v2h-6z" fill="currentColor"></path></svg>
            }
            { Icon === 'Close' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z" fill="currentColor"></path></svg>
            }
            { Icon === 'Check' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            }
            { Icon === 'Login' &&
                <svg className="svg-icon" viewBox="0 0 512 512"><path d="M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M288 336l80-80l-80-80"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 256h272"></path></svg>
            }
            { Icon === 'Logout' &&
                <svg className="svg-icon" viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 336l80-80l-80-80"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 256h256"></path></svg>
            }
            { Icon === 'Register' &&
                <svg className="svg-icon" viewBox="0 0 1024 1024"><path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" fill="currentColor"></path></svg>
            }
            { Icon === 'User' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z" fill="currentColor"></path><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"></path></svg>
            }
            { Icon === 'Menu' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" fill="currentColor"></path></svg>
            }
            { Icon === 'Home' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z" fill="currentColor"></path></svg>
            }
            { Icon === 'Configuration' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
            }
            { Icon === 'Route' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2"></circle><circle cx="18" cy="5" r="2"></circle><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H12"></path></g></svg>
            }
            { Icon === 'Usertypes' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93s-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96c1.05-1.12 3.67-1.69 5.14-1.69c.53 0 1.2.08 1.9.22c-1.64.87-1.9 2.02-1.9 2.68zM12 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13c1.07 0 2.92.39 3.84 1.15C18.28 17.88 15.39 20 12 20z" fill="currentColor"></path></svg>
            }
            { Icon === 'Land' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" fill="currentColor"></path></svg>
            }
            { Icon === 'Add' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z" fill="currentColor"></path><path d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z" fill="currentColor"></path></svg>
            }
            { Icon === 'Edit' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none"><path d="M21.03 2.97a3.578 3.578 0 0 1 0 5.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L15.97 2.97a3.578 3.578 0 0 1 5.06 0zM15 6.06L5.062 16a.75.75 0 0 0-.193.333l-1.05 3.85l3.85-1.05A.75.75 0 0 0 8 18.938L17.94 9L15 6.06zm2.03-2.03l-.97.97L19 7.94l.97-.97a2.079 2.079 0 0 0-2.94-2.94z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'Left' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15v3.586a1 1 0 0 1-1.707.707l-6.586-6.586a1 1 0 0 1 0-1.414l6.586-6.586A1 1 0 0 1 12 5.414V9h6v6h-6z"></path><path d="M21 15V9"></path></g></svg>
            }
            { Icon === 'Right' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9V5.414a1 1 0 0 1 1.707-.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586A1 1 0 0 1 12 18.586V15H6V9h6z"></path><path d="M3 9v6"></path></g></svg>
            }
            { Icon === 'Up' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v6H9v-6z"></path><path d="M9 21h6"></path></g></svg>
            }
            { Icon === 'Down' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1-1.414 0l-6.586-6.586A1 1 0 0 1 5.414 12H9V6h6v6z"></path><path d="M15 3H9"></path></g></svg>
            }
            { Icon === 'Forum' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path opacity=".3" d="M15 11V4H4v8.17L5.17 11H6z" fill="currentColor"></path><path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z" fill="currentColor"></path></svg>
            }
            { Icon === 'Expand' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z" fill="currentColor"></path></svg>
            }
            { Icon === 'Execute' &&
                <svg className="svg-icon" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor"></path><path d="M464 688a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" fill="currentColor"></path></svg>
            }
            { Icon === 'Database' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v6H8V5zM8 19v-6h16v6zm0 8v-6h16v6z" fill="currentColor"></path><circle cx="11" cy="8" r="1" fill="currentColor"></circle><circle cx="11" cy="16" r="1" fill="currentColor"></circle><circle cx="11" cy="24" r="1" fill="currentColor"></circle></svg>
            }
            { Icon === 'Text' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M5 5.5C5 6.33 5.67 7 6.5 7h4v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h4c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5z" fill="currentColor"></path></svg>
            }
            { Icon === 'Container' &&
                <svg className="svg-icon" viewBox="0 0 20 20"><g fill="none"><path d="M3 16a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8zm7 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v8zm7 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8z" fill="currentColor"></path></g></svg>
            }
            { Icon === 'Image' &&
                <svg className="svg-icon" viewBox="0 0 512 512"><rect x="48" y="80" width="416" height="352" rx="48" ry="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"></rect><circle cx="336" cy="176" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></circle><path d="M304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path><path d="M224 432l123.34-123.34a32 32 0 0 1 43.11-2L464 368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path></svg>
            }
            { Icon === 'Button' &&
                <svg className="svg-icon" viewBox="0 0 24 24"><path d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-7.5 10l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14zm-2.5 5l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09L14.5 19zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62L17 14z" fill="currentColor"></path></svg>
            }
            { Icon === 'Carousel' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M22 26H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM10 8v16h12V8z" fill="currentColor"></path><path d="M4 24H0v-2h4V10H0V8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" fill="currentColor"></path><path d="M32 24h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4v2h-4v12h4z" fill="currentColor"></path></svg>
            }
            { Icon === 'Form' &&
                <svg className="svg-icon" viewBox="0 0 32 32"><path d="M18 11h8v2h-8z" fill="currentColor"></path><path d="M6 19h8v2H6z" fill="currentColor"></path><path d="M10 16a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" fill="currentColor"></path><path d="M22 24a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" fill="currentColor"></path><path d="M28 30H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2zM4 4v24h24V4z" fill="currentColor"></path></svg>
            }
        </>
    );
}

export default Icon;