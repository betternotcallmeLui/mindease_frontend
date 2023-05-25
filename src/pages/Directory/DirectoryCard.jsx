import './Directory.css';

function DirectoryCard({ directoryCardImage, directoryCardTitle, directoryCardDescription }) {
    return (
        <div className="directoryCard">
            <div className="directoryCard_image">
                <img src={directoryCardImage} />
            </div>
            <div className="directoryCard_title">
                {directoryCardTitle}
            </div>
            <div className="directoryCard_description">
                {directoryCardDescription}
            </div>
        </div>
    )
}

export default DirectoryCard