import { PageBackgroundColor, BackgroundDotColor } from "../config";


const BackgroundStyle = ({ baseColor=PageBackgroundColor, dotColor=BackgroundDotColor, size="0.2rem", spacing="2rem"}) => {
    const dottedBackground = {
        backgroundColor: baseColor,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${size}, transparent ${size})`,
        backgroundSize: `${spacing} ${spacing}`,
        width: "100vw",
        height: "100vh",
        position: "fixed" as "fixed",
        zIndex: -1,
    }

    return <div style={dottedBackground} />
}

export default BackgroundStyle;