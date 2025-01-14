export default function Loader() {
    return (
        <div
            className="position-fixed top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "rgba(110, 110, 110, 0.7)",
                zIndex: 9999
            }}>
            <figure className="m-0">
                <img
                    src="/loader.png"
                    alt="loading-icon"
                    className="rotate-image w-100"
                />
            </figure>
        </div>
    );
}