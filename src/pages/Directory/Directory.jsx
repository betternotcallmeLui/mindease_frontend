import DirectoryCard from './DirectoryCard';

import './Directory.css';

function Directory() {
    return (
        <>
            <Header />
            <main className="directory_main">
                <div className="directory">
                    <div className="directory_container">
                        <DirectoryCard />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Directory